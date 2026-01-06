// FF가 만든 Flag 상수 — FEAT-00240 0.1.0 「주행 모드 선택 · 전시 044」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00240_ENABLE = 'body_00240_enable' as const;
export const SHOWCASE_00240_REVIEW = 'showcase_00240_review' as const;
export const FEAT_00240_FLAGS = [BODY_00240_ENABLE, SHOWCASE_00240_REVIEW] as const;
