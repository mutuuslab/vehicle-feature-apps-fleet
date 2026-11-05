// FF가 만든 호출 뼈대 — 기본값 OFF(false). 기능 코드는 이 함수로만 Flag를 읽는다.
import type { FlagClient, FlagContext } from '../../../../runtime/src/flag-client.ts';
import { BODY_00264_ENABLE, BODY_00264_HVACHMI } from './flags.ts';

/** Flag 제어점 — 기능 사용 허용 */
export function body00264EnableEnabled(client: FlagClient, ctx: FlagContext): Promise<boolean> {
  return client.getBooleanValue(BODY_00264_ENABLE, false, ctx);
}

/** Flag 제어점 — 기능 사용 허용 */
export function body00264HvachmiEnabled(client: FlagClient, ctx: FlagContext): Promise<boolean> {
  return client.getBooleanValue(BODY_00264_HVACHMI, false, ctx);
}
