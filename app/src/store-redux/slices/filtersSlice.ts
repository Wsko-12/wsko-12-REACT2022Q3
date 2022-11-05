import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store-redux';
import { ESortingOrder } from 'ts/enums';

interface IFiltersState {
  name: ESortingOrder;
  // can't use Set with Redux
  races: string[];
  gender: string[];
}

const initialState: IFiltersState = {
  name: ESortingOrder.ASC,
  races: ['Hobbit', 'Orc', 'Goblin', 'Human', 'Elf', 'Maiar'],
  gender: ['Male', 'Female'],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addRace: (state, action: PayloadAction<string>) => {
      state.races.push(action.payload);
    },

    removeRace: (state, action: PayloadAction<string>) => {
      state.races = state.races.filter((race) => race != action.payload);
    },

    addGender: (state, action: PayloadAction<string>) => {
      state.gender.push(action.payload);
    },

    removeGender: (state, action: PayloadAction<string>) => {
      state.gender = state.gender.filter((gender) => gender != action.payload);
    },

    setSortingOrder: (state, action: PayloadAction<ESortingOrder>) => {
      state.name = action.payload;
    },
  },
});

export const { addRace, removeRace, setSortingOrder, addGender, removeGender } =
  filtersSlice.actions;

export default filtersSlice.reducer;

export const filtersSelector = (state: RootState) => state.filters;
