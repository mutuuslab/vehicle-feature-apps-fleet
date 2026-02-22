// FF가 만든 Flag 상수 — FEAT-00228 0.1.0 「주유구 도어 잠금 · 전시 032」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00228_ENABLE = 'body_00228_enable' as const;
export const SHOWCASE_00228_REVIEW = 'showcase_00228_review' as const;
export const FEAT_00228_FLAGS = [BODY_00228_ENABLE, SHOWCASE_00228_REVIEW] as const;
