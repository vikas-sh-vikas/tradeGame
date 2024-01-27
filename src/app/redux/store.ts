import { configureStore } from '@reduxjs/toolkit'
import dataReducer from "@/app/redux/features/slice";
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export function makeStore() {
  return configureStore({
    reducer: {
      dataReducer,
    },
  });
}


export const store = makeStore()
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
