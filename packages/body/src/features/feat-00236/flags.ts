// FF가 만든 Flag 상수 — FEAT-00236 0.1.0 「센터 콘솔 HMI · 전시 040」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00236_ENABLE = 'body_00236_enable' as const;
export const BODY_00236_CONSOLE = 'body_00236_console' as const;
export const FEAT_00236_FLAGS = [BODY_00236_ENABLE, BODY_00236_CONSOLE] as const;
