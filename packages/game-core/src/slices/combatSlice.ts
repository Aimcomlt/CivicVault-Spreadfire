import toolkit from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
const { createSlice } = toolkit as any;

export interface CombatState {
  score: number;
}

const initialState: CombatState = { score: 0 };

const combatSlice = createSlice({
  name: 'combat',
  initialState,
  reducers: {
    addScore(state: CombatState, action: PayloadAction<number>) {
      state.score += action.payload;
    }
  }
});

export const { addScore } = combatSlice.actions;
export const combatReducer = combatSlice.reducer;
