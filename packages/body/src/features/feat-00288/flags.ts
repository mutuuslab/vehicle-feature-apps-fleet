// FF가 만든 Flag 상수 — FEAT-00288 0.1.0 「실내 조명 디밍 · 전시 092」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00288_ENABLE = 'body_00288_enable' as const;
export const BODY_00288_DIMMING = 'body_00288_dimming' as const;
export const FEAT_00288_FLAGS = [BODY_00288_ENABLE, BODY_00288_DIMMING] as const;
