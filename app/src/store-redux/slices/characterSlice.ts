import { createAsyncThunk, createEntityAdapter, createSlice, EntityId } from '@reduxjs/toolkit';
import API from 'api/API';
import { RootState } from 'store-redux';
import { ICharacter } from 'ts/interfaces';

const charactersAdapter = createEntityAdapter<ICharacter>({
  selectId: (character) => character._id,
});

const initialState = charactersAdapter.getInitialState({
  isError: false,
  isLoading: false,
});

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      charactersAdapter.setAll(state, action.payload?.docs || []);
      state.isLoading = false;
    });
    builder.addCase(fetchCharacters.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

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

export const charactersSelectors = charactersAdapter.getSelectors<RootState>(
  (state) => state.characters
);

export const charactersFlagsSelectors = (state: RootState) => ({
  isError: state.characters.isError,
  isLoading: state.characters.isLoading,
});

export const selectCharacterByID = (id: EntityId) => (state: RootState) =>
  charactersSelectors.selectById(state, id);
export default charactersSlice.reducer;
