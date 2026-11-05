// FF가 만든 호출 뼈대 — 기본값 OFF(false). 기능 코드는 이 함수로만 Flag를 읽는다.
import type { FlagClient, FlagContext } from '../../../../runtime/src/flag-client.ts';
import { BODY_00288_ENABLE, BODY_00288_DIMMING } from './flags.ts';

/** Flag 제어점 — 기능 사용 허용 */
export function body00288EnableEnabled(client: FlagClient, ctx: FlagContext): Promise<boolean> {
  return client.getBooleanValue(BODY_00288_ENABLE, false, ctx);
}

/** Flag 제어점 — 기능 사용 허용 */
export function body00288DimmingEnabled(client: FlagClient, ctx: FlagContext): Promise<boolean> {
  return client.getBooleanValue(BODY_00288_DIMMING, false, ctx);
}
