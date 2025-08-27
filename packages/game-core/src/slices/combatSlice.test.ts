import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { combatReducer, addScore } from './combatSlice.js';

describe('combatSlice', () => {
  it('adds to the score', () => {
    const state = combatReducer({ score: 0 }, addScore(5));
    assert.strictEqual(state.score, 5);
  });
});

