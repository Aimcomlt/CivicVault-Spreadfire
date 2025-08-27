import toolkit from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
const { createSlice } = toolkit as any;

export interface PolicyState {
  enacted: string[];
}

const initialState: PolicyState = { enacted: [] };

const policySlice = createSlice({
  name: 'policy',
  initialState,
  reducers: {
    enactPolicy(state: PolicyState, action: PayloadAction<string>) {
      state.enacted.push(action.payload);
    }
  }
});

export const { enactPolicy } = policySlice.actions;
export const policyReducer = policySlice.reducer;
