// FF가 만든 Flag 상수 — FEAT-00280 0.1.0 「실내 CO2·미세먼지 모니터링 · 전시 084」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00280_ENABLE = 'body_00280_enable' as const;
export const BODY_00280_AIRQUALITY = 'body_00280_airquality' as const;
export const FEAT_00280_FLAGS = [BODY_00280_ENABLE, BODY_00280_AIRQUALITY] as const;
