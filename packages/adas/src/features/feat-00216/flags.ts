// FF가 만든 Flag 상수 — FEAT-00216 0.1.0 「연석 감지·휠 보호 · 전시 020」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const ADAS_00216_ENABLE = 'adas_00216_enable' as const;
export const ADAS_00216_CURB = 'adas_00216_curb' as const;
export const FEAT_00216_FLAGS = [ADAS_00216_ENABLE, ADAS_00216_CURB] as const;
