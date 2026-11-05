// FF가 만든 Flag 상수 — FEAT-00224 0.1.0 「트렁크 잠금·트렁크 조명 · 전시 028」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00224_ENABLE = 'body_00224_enable' as const;
export const BODY_00224_TRUNK = 'body_00224_trunk' as const;
export const FEAT_00224_FLAGS = [BODY_00224_ENABLE, BODY_00224_TRUNK] as const;
