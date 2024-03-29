import {
  configureStore,
  combineReducers
} from '@reduxjs/toolkit';
import { authSlice } from 'entities/user/model';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export const setupStore = () =>
  configureStore({
    reducer: rootReducer
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
