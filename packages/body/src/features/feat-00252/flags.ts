// FF가 만든 Flag 상수 — FEAT-00252 0.1.0 「차량 사양 코딩 · 전시 056」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00252_ENABLE = 'body_00252_enable' as const;
export const SHOWCASE_00252_REVIEW = 'showcase_00252_review' as const;
export const FEAT_00252_FLAGS = [BODY_00252_ENABLE, SHOWCASE_00252_REVIEW] as const;
