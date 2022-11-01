import { IStore } from 'store/Store';
import { ESortingOrder } from 'ts/enums';
import { EStoreReducerActions, TStoreReducerAction } from '../StoreReducer';

// type TSortingPayloads = {
//   [EStoreReducerActions.SetNameSorting]: ESortingOrder;
//   [EStoreReducerActions.SetRacesSelected]: Set<string>;
//   [EStoreReducerActions.SetGenderSelected]: Set<string>;
// };

// export type TSortingAction = ActionMap<TSortingPayloads>[keyof TSortingPayloads];

// the same as below, but violates KISS

interface ISetNameSortingAction {
  type: EStoreReducerActions.SetNameSorting;
  payload: ESortingOrder;
}

interface ISetRacesSelectedAction {
  type: EStoreReducerActions.SetRacesSelected;
  payload: Set<string>;
}

interface ISetGenderSelectedAction {
  type: EStoreReducerActions.SetGenderSelected;
  payload: Set<string>;
}

export type TSortingAction =
  | ISetNameSortingAction
  | ISetRacesSelectedAction
  | ISetGenderSelectedAction;

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
