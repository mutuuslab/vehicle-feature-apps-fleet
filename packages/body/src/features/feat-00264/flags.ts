// FF가 만든 Flag 상수 — FEAT-00264 0.1.0 「인포테인먼트 HMI 연동(공조) · 전시 068」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00264_ENABLE = 'body_00264_enable' as const;
export const SHOWCASE_00264_REVIEW = 'showcase_00264_review' as const;
export const FEAT_00264_FLAGS = [BODY_00264_ENABLE, SHOWCASE_00264_REVIEW] as const;
