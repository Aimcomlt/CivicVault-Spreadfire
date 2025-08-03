import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PolicyState {
  enacted: string[];
}

const initialState: PolicyState = { enacted: [] };

const policySlice = createSlice({
  name: 'policy',
  initialState,
  reducers: {
    enactPolicy(state, action: PayloadAction<string>) {
      state.enacted.push(action.payload);
    }
  }
});

export const { enactPolicy } = policySlice.actions;
export const policyReducer = policySlice.reducer;
