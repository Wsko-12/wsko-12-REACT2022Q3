import { IStore } from 'store/Store';
import { EStoreReducerActions, TStoreReducerAction } from '../StoreReducer';

// type TPaginationPayloads = {
//   [EStoreReducerActions.SetCurrentPage]: number;
//   [EStoreReducerActions.SetPagesTotal]: number;
//   [EStoreReducerActions.SetLimit]: number;
// };
// export type TPaginationAction = ActionMap<TPaginationPayloads>[keyof TPaginationPayloads];

// the same as below, but violates KISS

interface TSetCurrentPageAction {
  type: EStoreReducerActions.SetCurrentPage;
  payload: number;
}

interface TSetPagesTotalAction {
  type: EStoreReducerActions.SetPagesTotal;
  payload: number;
}

interface TSetLimitAction {
  type: EStoreReducerActions.SetLimit;
  payload: number;
}

export type TPaginationAction = TSetCurrentPageAction | TSetPagesTotalAction | TSetLimitAction;

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
