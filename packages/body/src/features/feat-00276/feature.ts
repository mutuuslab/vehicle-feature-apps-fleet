// 시연용 생성 코드 — 고객 차량 SW가 아닙니다. Feature Platform 등록 데이터로 만든 예시 구현입니다.
// FEAT-00276 0.1.0 「공기질 연동 자동 내기 전환 · 전시 080」 — 가상 전시 데이터 — 정책·기준선 검토. 실제 고객 요청·검증 결과가 아닙니다.
// 모든 분기는 flag-guards.ts의 함수로만 Flag를 읽는다. 오류·시간 초과는 꺼짐(기존 경로)으로 간다.
import { flagOn, guardAllows, type FeatureDeps } from '../../../../runtime/src/flag-client.ts';
import { BODY_00276_ENABLE, SHOWCASE_00276_REVIEW } from './flags.ts';
import { body00276EnableEnabled, showcase00276ReviewEnabled } from './flag-guards.ts';

export const FEATURE = { featureId: 'FEAT-00276', version: '0.1.0', name: '공기질 연동 자동 내기 전환 · 전시 080', safetyRelated: false } as const;

/** 켜짐 판단 — QM Feature라 로컬 Guard는 보지 않는다 */
async function enabled(d: FeatureDeps, flagKey: string, read: () => Promise<boolean>): Promise<boolean> {
  if (!(await flagOn(read, d.timeoutMs))) return false;
  return true;
}

/** Flag 제어점(body_00276_enable) — 켜지면 새 기능 경로, 꺼지면 기존 경로 */
export async function runFeature(d: FeatureDeps): Promise<{ path: 'NEW' | 'LEGACY'; flagKey: string }> {
  const on = await enabled(d, BODY_00276_ENABLE, () => body00276EnableEnabled(d.client, { targetingKey: d.vin }));
  return { path: on ? 'NEW' : 'LEGACY', flagKey: BODY_00276_ENABLE };
}

/** Flag 제어점(showcase_00276_review) — 켜지면 새 기능 경로, 꺼지면 기존 경로 */
export async function runFeature2(d: FeatureDeps): Promise<{ path: 'NEW' | 'LEGACY'; flagKey: string }> {
  const on = await enabled(d, SHOWCASE_00276_REVIEW, () => showcase00276ReviewEnabled(d.client, { targetingKey: d.vin }));
  return { path: on ? 'NEW' : 'LEGACY', flagKey: SHOWCASE_00276_REVIEW };
}
