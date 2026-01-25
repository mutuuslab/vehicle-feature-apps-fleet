// FF가 만든 Flag 상수 — FEAT-00200 0.1.0 「자율주행 데이터 기록장치(DSSAD) · 전시 004」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const ADAS_00200_ENABLE = 'adas_00200_enable' as const;
export const SHOWCASE_00200_REVIEW = 'showcase_00200_review' as const;
export const FEAT_00200_FLAGS = [ADAS_00200_ENABLE, SHOWCASE_00200_REVIEW] as const;
