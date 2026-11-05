// FF가 만든 Flag 상수 — FEAT-00268 0.1.0 「뒷유리 열선 · 전시 072」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00268_ENABLE = 'body_00268_enable' as const;
export const BODY_00268_DEFOG = 'body_00268_defog' as const;
export const FEAT_00268_FLAGS = [BODY_00268_ENABLE, BODY_00268_DEFOG] as const;
