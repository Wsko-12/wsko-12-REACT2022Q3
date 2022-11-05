import { Action, configureStore, ThunkDispatch } from '@reduxjs/toolkit';
import charactersReducer from './slices/characterSlice';
import searchReducer from './slices/searchSlice';
import filtersReducer from './slices/filtersSlice';
import paginationSlice from './slices/paginationSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    search: searchReducer,
    filters: filtersReducer,
    pagination: paginationSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type ThunkAction<
  R, // Return type of the thunk function
  S, // state type used by getState
  E, // any "extra argument" injected into the thunk
  A extends Action // known types of actions that can be dispatched
> = (dispatch: ThunkDispatch<S, E, A>, getState: () => S, extraArgument: E) => R;
