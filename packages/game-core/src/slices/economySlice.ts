import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EconomyState {
  credits: number;
}

const initialState: EconomyState = { credits: 0 };

const economySlice = createSlice({
  name: 'economy',
  initialState,
  reducers: {
    adjustCredits(state, action: PayloadAction<number>) {
      state.credits += action.payload;
    }
  }
});

export const { adjustCredits } = economySlice.actions;
export const economyReducer = economySlice.reducer;
