// FF가 만든 Flag 상수 — FEAT-00276 0.1.0 「공기질 연동 자동 내기 전환 · 전시 080」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00276_ENABLE = 'body_00276_enable' as const;
export const BODY_00276_RECIRC = 'body_00276_recirc' as const;
export const FEAT_00276_FLAGS = [BODY_00276_ENABLE, BODY_00276_RECIRC] as const;
