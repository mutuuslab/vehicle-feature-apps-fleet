// FF가 만든 Flag 상수 — FEAT-00204 0.1.0 「긴급 차량 인식(사이렌·경광등) · 전시 008」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const ADAS_00204_ENABLE = 'adas_00204_enable' as const;
export const ADAS_00204_SIREN = 'adas_00204_siren' as const;
export const FEAT_00204_FLAGS = [ADAS_00204_ENABLE, ADAS_00204_SIREN] as const;
