import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CombatState {
  score: number;
}

const initialState: CombatState = { score: 0 };

const combatSlice = createSlice({
  name: 'combat',
  initialState,
  reducers: {
    addScore(state, action: PayloadAction<number>) {
      state.score += action.payload;
    }
  }
});

export const { addScore } = combatSlice.actions;
export const combatReducer = combatSlice.reducer;
