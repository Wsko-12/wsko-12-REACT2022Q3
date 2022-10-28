import { IStore } from 'api/store/Store';
import { ActionMap } from '../ActionMap/ActionMap';
import { EStoreReducerActions, TStoreReducerAction } from '../StoreReducer';

type TPaginationPayloads = {
  [EStoreReducerActions.SetCurrentPage]: number;
  [EStoreReducerActions.SetPagesTotal]: number;
};

export type TPaginationAction = ActionMap<TPaginationPayloads>[keyof TPaginationPayloads];

const paginationReducer = (state: IStore['pagination'], action: TStoreReducerAction) => {
  switch (action.type) {
    case EStoreReducerActions.SetCurrentPage:
      return { ...state, page: action.payload };
    case EStoreReducerActions.SetPagesTotal:
      return { ...state, total: action.payload };
    default:
      return state;
  }
};

export default paginationReducer;
