import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './slices/characterSlice';
import searchReducer from './slices/searchSlice';
import filtersReducer from './slices/filtersSlice';
import paginationReducer from './slices/paginationSlice';
import formReducer from './slices/formSlice';
import { fetchCharactersMiddleware } from './middleware/fetchCharactersMiddleware';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    search: searchReducer,
    filters: filtersReducer,
    pagination: paginationReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchCharactersMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
