// FF가 만든 호출 뼈대 — 기본값 OFF(false). 기능 코드는 이 함수로만 Flag를 읽는다.
import type { FlagClient, FlagContext } from '../../../../runtime/src/flag-client.ts';
import { ADAS_00216_ENABLE, SHOWCASE_00216_REVIEW } from './flags.ts';

/** Flag 제어점 — 기능 사용 허용 */
export function adas00216EnableEnabled(client: FlagClient, ctx: FlagContext): Promise<boolean> {
  return client.getBooleanValue(ADAS_00216_ENABLE, false, ctx);
}

/** Flag 제어점 — 기능 사용 허용 */
export function showcase00216ReviewEnabled(client: FlagClient, ctx: FlagContext): Promise<boolean> {
  return client.getBooleanValue(SHOWCASE_00216_REVIEW, false, ctx);
}
