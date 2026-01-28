// FF가 만든 Flag 상수 — FEAT-00260 0.1.0 「테일게이트 열림 높이 기억 · 전시 064」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00260_ENABLE = 'body_00260_enable' as const;
export const SHOWCASE_00260_REVIEW = 'showcase_00260_review' as const;
export const FEAT_00260_FLAGS = [BODY_00260_ENABLE, SHOWCASE_00260_REVIEW] as const;
