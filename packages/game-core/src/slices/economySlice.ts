import toolkit from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
const { createSlice } = toolkit as any;

export interface EconomyState {
  credits: number;
}

const initialState: EconomyState = { credits: 0 };

const economySlice = createSlice({
  name: 'economy',
  initialState,
  reducers: {
    adjustCredits(state: EconomyState, action: PayloadAction<number>) {
      state.credits += action.payload;
    }
  }
});

export const { adjustCredits } = economySlice.actions;
export const economyReducer = economySlice.reducer;
