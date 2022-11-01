import { IStore } from 'store/Store';
import { ActionMap } from '../ActionMap/ActionMap';
import { EStoreReducerActions, TStoreReducerAction } from '../StoreReducer';

type TPaginationPayloads = {
  [EStoreReducerActions.SetCurrentPage]: number;
  [EStoreReducerActions.SetPagesTotal]: number;
  [EStoreReducerActions.SetLimit]: number;
};

export type TPaginationAction = ActionMap<TPaginationPayloads>[keyof TPaginationPayloads];

const paginationReducer = (state: IStore['pagination'], action: TStoreReducerAction) => {
  switch (action.type) {
    case EStoreReducerActions.SetCurrentPage:
      return { ...state, page: action.payload };
    case EStoreReducerActions.SetPagesTotal:
      return { ...state, total: action.payload };
    case EStoreReducerActions.SetLimit:
      return { ...state, limit: action.payload };
    default:
      return state;
  }
};

export default paginationReducer;

export const setCurrentPageAction: (payload: number) => TStoreReducerAction = (payload) => {
  return {
    type: EStoreReducerActions.SetCurrentPage,
    payload,
  };
};

export const setTotalPagesAction: (payload: number) => TStoreReducerAction = (payload) => {
  return {
    type: EStoreReducerActions.SetPagesTotal,
    payload,
  };
};

export const setPageLimitAction: (payload: number) => TStoreReducerAction = (payload) => {
  return {
    type: EStoreReducerActions.SetLimit,
    payload,
  };
};
