import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FactionsState {
  alignment: string;
}

const initialState: FactionsState = { alignment: 'neutral' };

const factionsSlice = createSlice({
  name: 'factions',
  initialState,
  reducers: {
    setAlignment(state, action: PayloadAction<string>) {
      state.alignment = action.payload;
    }
  }
});

export const { setAlignment } = factionsSlice.actions;
export const factionsReducer = factionsSlice.reducer;
