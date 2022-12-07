import { AnyAction, Middleware, MiddlewareAPI } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from 'store-redux';

import { fetchCharacters } from 'store-redux/slices/characterSlice';
import { setPage } from 'store-redux/slices/paginationSlice';

export const fetchCharactersMiddleware: Middleware =
  ({ /* getState, */ dispatch }: MiddlewareAPI<AppDispatch, RootState>) =>
  (next) =>
  (action: AnyAction) => {
    const { type } = action;
    const storeAfter = next(action);
    if (type.startsWith('pagination') || type.startsWith('search') || type.startsWith('filters')) {
      if (type.startsWith('search')) {
        dispatch(setPage(1));
      }
      dispatch(fetchCharacters());
    }
    return storeAfter;
  };
