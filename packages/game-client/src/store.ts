import { configureStore } from '@reduxjs/toolkit';
import {
  combatReducer,
  economyReducer,
  factionsReducer,
  policyReducer
} from 'game-core';

export const store = configureStore({
  reducer: {
    combat: combatReducer,
    economy: economyReducer,
    factions: factionsReducer,
    policy: policyReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
