// 시연용 생성 코드 — 고객 차량 SW가 아닙니다. Feature Platform 등록 데이터로 만든 예시 구현입니다.
// FEAT-00276 기능 분기 시험 — 기본 OFF, 켜짐 분기, Guard 차단, 오류·시간 초과 시 OFF
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { denyAll, failingClient, fakeClient, hangingClient, testDeps } from '../../../../runtime/src/testing.ts';
import { BODY_00276_ENABLE, BODY_00276_RECIRC } from './flags.ts';
import { FEATURE, runFeature, runFeature2 } from './feature.ts';

const ALL = [BODY_00276_ENABLE, BODY_00276_RECIRC];

test('FEAT-00276 공기질 연동 자동 내기 전환 · 전시 080 — 기본값 OFF(Flag 없음)는 기존 경로', async () => {
  const d = testDeps(fakeClient([]));
  assert.equal((await runFeature(d)).path, 'LEGACY');
  assert.equal((await runFeature2(d)).path, 'LEGACY');
});

test('FEAT-00276 공기질 연동 자동 내기 전환 · 전시 080 — 켜지면 새 경로', async () => {
  const d = testDeps(fakeClient(ALL));
  assert.equal(FEATURE.featureId, 'FEAT-00276');
  assert.equal((await runFeature(d)).path, 'NEW');
  assert.equal((await runFeature2(d)).path, 'NEW');
});

test('FEAT-00276 공기질 연동 자동 내기 전환 · 전시 080 — QM이라 로컬 Guard와 무관', async () => {
  const d = testDeps(fakeClient(ALL), { guard: denyAll });
  assert.equal((await runFeature(d)).path, 'NEW');
  assert.equal((await runFeature2(d)).path, 'NEW');
});

test('FEAT-00276 공기질 연동 자동 내기 전환 · 전시 080 — 클라이언트 오류·시간 초과는 꺼짐', async () => {
  for (const client of [failingClient, hangingClient]) {
    const d = testDeps(client, { timeoutMs: 5 });
    assert.equal((await runFeature(d)).path, 'LEGACY');
    assert.equal((await runFeature2(d)).path, 'LEGACY');
  }
});
