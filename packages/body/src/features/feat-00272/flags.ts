// FF가 만든 Flag 상수 — FEAT-00272 0.1.0 「부트로더(공조 제어기) · 전시 076」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00272_ENABLE = 'body_00272_enable' as const;
export const BODY_00272_BOOTLOADER = 'body_00272_bootloader' as const;
export const FEAT_00272_FLAGS = [BODY_00272_ENABLE, BODY_00272_BOOTLOADER] as const;
