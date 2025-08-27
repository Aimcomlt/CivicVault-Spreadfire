import toolkit from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
const { createSlice } = toolkit as any;

export interface FactionsState {
  alignment: string;
}

const initialState: FactionsState = { alignment: 'neutral' };

const factionsSlice = createSlice({
  name: 'factions',
  initialState,
  reducers: {
    setAlignment(state: FactionsState, action: PayloadAction<string>) {
      state.alignment = action.payload;
    }
  }
});

export const { setAlignment } = factionsSlice.actions;
export const factionsReducer = factionsSlice.reducer;
