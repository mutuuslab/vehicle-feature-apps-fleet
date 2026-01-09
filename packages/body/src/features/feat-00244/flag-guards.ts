// FF가 만든 호출 뼈대 — 기본값 OFF(false). 기능 코드는 이 함수로만 Flag를 읽는다.
import type { FlagClient, FlagContext } from '../../../../runtime/src/flag-client.ts';
import { BODY_00244_ENABLE, SHOWCASE_00244_REVIEW } from './flags.ts';

/** Flag 제어점 — 기능 사용 허용 */
export function body00244EnableEnabled(client: FlagClient, ctx: FlagContext): Promise<boolean> {
  return client.getBooleanValue(BODY_00244_ENABLE, false, ctx);
}

/** Flag 제어점 — 기능 사용 허용 */
export function showcase00244ReviewEnabled(client: FlagClient, ctx: FlagContext): Promise<boolean> {
  return client.getBooleanValue(SHOWCASE_00244_REVIEW, false, ctx);
}
