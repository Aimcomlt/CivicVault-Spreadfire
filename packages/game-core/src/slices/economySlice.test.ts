import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { economyReducer, adjustCredits } from './economySlice.js';

describe('economySlice', () => {
  it('adjusts credits', () => {
    const state = economyReducer({ credits: 0 }, adjustCredits(10));
    assert.strictEqual(state.credits, 10);
  });
});

