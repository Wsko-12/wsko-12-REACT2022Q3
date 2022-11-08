import {
  AnyAction,
  createAsyncThunk,
  createSlice,
  PayloadAction,
  ThunkAction,
} from '@reduxjs/toolkit';
import API from 'api/API';
import { AppDispatch, RootState } from 'store-redux';
import { ESortingOrder } from 'ts/enums';
import { ICharacter, TApiResponse } from 'ts/interfaces';
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
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      console.log('pending');
      state.isLoading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.characters = action.payload?.docs || [];
      state.isLoading = false;
    });
    builder.addCase(fetchCharacters.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { setCharacters, setError, setLoading } = charactersSlice.actions;
export const selectCharacters = (state: RootState) => state.characters;

export const fetchCharacters = createAsyncThunk(
  'characters/fetchCharacters',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootState;
    const search = state.search.value;
    const { limit, page } = state.pagination;
    const { gender, name, races } = state.filters;
    const response = await API.getCharacters(limit, page, search, name, races, gender);
    return response;
  }
);

export default charactersSlice.reducer;
