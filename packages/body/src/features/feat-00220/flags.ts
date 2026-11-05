// FF가 만든 Flag 상수 — FEAT-00220 0.1.0 「RF 원격 키(RKE) · 전시 024」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const BODY_00220_ENABLE = 'body_00220_enable' as const;
export const BODY_00220_RKE = 'body_00220_rke' as const;
export const FEAT_00220_FLAGS = [BODY_00220_ENABLE, BODY_00220_RKE] as const;
