import { IStore } from 'store/Store';
import { ESortingOrder } from 'ts/enums';
import { ActionMap } from '../ActionMap/ActionMap';
import { EStoreReducerActions, TStoreReducerAction } from '../StoreReducer';

type TSortingPayloads = {
  [EStoreReducerActions.SetNameSorting]: ESortingOrder;
  [EStoreReducerActions.SetRacesSelected]: Set<string>;
  [EStoreReducerActions.SetGenderSelected]: Set<string>;
};

export type TSortingAction = ActionMap<TSortingPayloads>[keyof TSortingPayloads];

const sortingReducer = (state: IStore['sorting'], action: TStoreReducerAction) => {
  switch (action.type) {
    case EStoreReducerActions.SetNameSorting:
      return { ...state, name: action.payload };
    case EStoreReducerActions.SetRacesSelected:
      return { ...state, races: new Set(action.payload) };
    case EStoreReducerActions.SetGenderSelected:
      return { ...state, gender: new Set(action.payload) };
    default:
      return state;
  }
};

export default sortingReducer;

export const setNameSortingAction: (payload: ESortingOrder) => TStoreReducerAction = (payload) => {
  return {
    type: EStoreReducerActions.SetNameSorting,
    payload,
  };
};

export const setRacesAction: (payload: Set<string>) => TStoreReducerAction = (payload) => {
  return {
    type: EStoreReducerActions.SetRacesSelected,
    payload,
  };
};

export const setGendersAction: (payload: Set<string>) => TStoreReducerAction = (payload) => {
  return {
    type: EStoreReducerActions.SetGenderSelected,
    payload,
  };
};
