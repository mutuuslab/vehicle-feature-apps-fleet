// FF가 만든 Flag 상수 — FEAT-00244 0.1.0 「근거리 주차 보조 · 전시 048」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00244_ENABLE = 'body_00244_enable' as const;
export const SHOWCASE_00244_REVIEW = 'showcase_00244_review' as const;
export const FEAT_00244_FLAGS = [BODY_00244_ENABLE, SHOWCASE_00244_REVIEW] as const;
