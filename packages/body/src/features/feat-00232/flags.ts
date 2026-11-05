// FF가 만든 Flag 상수 — FEAT-00232 0.1.0 「패닉 알람 · 전시 036」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00232_ENABLE = 'body_00232_enable' as const;
export const BODY_00232_PANIC = 'body_00232_panic' as const;
export const FEAT_00232_FLAGS = [BODY_00232_ENABLE, BODY_00232_PANIC] as const;
