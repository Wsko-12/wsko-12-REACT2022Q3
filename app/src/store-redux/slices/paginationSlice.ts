import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store-redux';
import { fetchCharacters } from './characterSlice';

interface IPaginationState {
  page: number;
  total: number;
  limit: number;
}

const initialState: IPaginationState = {
  page: 1,
  total: 1,
  limit: 10,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.page = action.payload?.page || 1;
      state.limit = action.payload?.limit || 1;
      state.total = action.payload?.pages || 1;
    });
  },
});

export default paginationSlice.reducer;

export const { setPage, setLimit, setTotal } = paginationSlice.actions;
export const paginationSelector = (state: RootState) => state.pagination;
