// FF가 만든 Flag 상수 — FEAT-00208 0.1.0 「탑승자 식별(얼굴·프로필) · 전시 012」. 키 문자열은 FF 등록 원장과 대사하므로 바꾸지 않는다.
export const ADAS_00208_ENABLE = 'adas_00208_enable' as const;
export const ADAS_00208_FACEID = 'adas_00208_faceid' as const;
export const FEAT_00208_FLAGS = [ADAS_00208_ENABLE, ADAS_00208_FACEID] as const;
