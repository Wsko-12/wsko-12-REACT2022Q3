import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store-redux';
import { getSavedSearchQuery } from 'utils/utils';

interface ISearchState {
  value: string;
}

const initialState: ISearchState = {
  value: getSavedSearchQuery(),
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;
export const selectSearch = (state: RootState) => state.search.value;

export default searchSlice.reducer;
