// FF가 만든 Flag 상수 — FEAT-00248 0.1.0 「트레일러 연결 감지 및 트레일러 모드 전환 · 전시 052」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00248_ENABLE = 'body_00248_enable' as const;
export const SHOWCASE_00248_REVIEW = 'showcase_00248_review' as const;
export const FEAT_00248_FLAGS = [BODY_00248_ENABLE, SHOWCASE_00248_REVIEW] as const;
