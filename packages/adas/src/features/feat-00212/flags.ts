// FF가 만든 Flag 상수 — FEAT-00212 0.1.0 「제한 속도 정보 기능 · 전시 016」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const ADAS_00212_ENABLE = 'adas_00212_enable' as const;
export const SHOWCASE_00212_REVIEW = 'showcase_00212_review' as const;
export const FEAT_00212_FLAGS = [ADAS_00212_ENABLE, SHOWCASE_00212_REVIEW] as const;
