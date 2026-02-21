// FF가 만든 Flag 상수 — FEAT-00284 0.1.0 「독서등·스폿라이트 제어 · 전시 088」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00284_ENABLE = 'body_00284_enable' as const;
export const SHOWCASE_00284_REVIEW = 'showcase_00284_review' as const;
export const FEAT_00284_FLAGS = [BODY_00284_ENABLE, SHOWCASE_00284_REVIEW] as const;
