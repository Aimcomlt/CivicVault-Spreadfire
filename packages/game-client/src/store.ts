import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  combatReducer,
  economyReducer,
  factionsReducer,
  policyReducer,
  type CombatState,
  type EconomyState,
  type FactionsState,
  type PolicyState
} from 'game-core';

export interface RootState {
  combat: CombatState;
  economy: EconomyState;
  factions: FactionsState;
  policy: PolicyState;
}

export const store = configureStore({
  reducer: {
    combat: combatReducer,
    economy: economyReducer,
    factions: factionsReducer,
    policy: policyReducer
  }
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
