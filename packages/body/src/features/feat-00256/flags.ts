// FF가 만든 Flag 상수 — FEAT-00256 0.1.0 「퍼들·접근 조명 · 전시 060」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00256_ENABLE = 'body_00256_enable' as const;
export const BODY_00256_PUDDLE = 'body_00256_puddle' as const;
export const FEAT_00256_FLAGS = [BODY_00256_ENABLE, BODY_00256_PUDDLE] as const;
