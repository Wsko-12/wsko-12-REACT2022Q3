import { AnyAction, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import API from 'api/API';
import { RootState } from 'store-redux';
import { ICharacter } from 'ts/interfaces';
import { setPage, setTotal } from './paginationSlice';

interface ICharactersState {
  characters: ICharacter[];
  isError: boolean;
  isLoading: boolean;
}

const initialState: ICharactersState = {
  characters: [],
  isError: false,
  isLoading: false,
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<ICharacter[]>) => {
      state.isLoading = false;
      state.isError = false;
      state.characters = action.payload;
    },

    setLoading: (state) => {
      state.isLoading = true;
      state.isError = false;
    },

    setError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { setCharacters, setError, setLoading } = charactersSlice.actions;
export const selectCharacters = (state: RootState) => state.characters;

export const fetchCharacters = (): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch, getState) => {
    const search = getState().search.value;
    const { limit, page } = getState().pagination;
    const { gender, name, races } = getState().filters;
    dispatch(setLoading());
    const response = await API.getCharacters(limit, page, search, name, races, gender);
    if (response) {
      if (response.pages < page) {
        dispatch(setPage(response.pages));
        return;
      }
      dispatch(setCharacters(response.docs));
      dispatch(setTotal(response.pages));
    } else {
      dispatch(setError());
    }
  };
};

export default charactersSlice.reducer;
