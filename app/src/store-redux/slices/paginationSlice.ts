import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store-redux';

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
});

export default paginationSlice.reducer;

export const { setPage, setLimit, setTotal } = paginationSlice.actions;
export const paginationSelector = (state: RootState) => state.pagination;
