import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { policyReducer, enactPolicy } from './policySlice.js';

describe('policySlice', () => {
  it('adds enacted policies', () => {
    const state = policyReducer({ enacted: [] }, enactPolicy('law'));
    assert.ok(state.enacted.includes('law'));
  });
});

