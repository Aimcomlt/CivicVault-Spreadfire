import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { factionsReducer, setAlignment } from './factionsSlice.js';

describe('factionsSlice', () => {
  it('sets alignment', () => {
    const state = factionsReducer({ alignment: 'neutral' }, setAlignment('ally'));
    assert.strictEqual(state.alignment, 'ally');
  });
});

