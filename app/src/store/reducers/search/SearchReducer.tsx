import { ActionMap } from '../ActionMap/ActionMap';
import { EStoreReducerActions, TStoreReducerAction } from '../StoreReducer';

type TSearchPayloads = {
  [EStoreReducerActions.SetSearch]: string;
};

export type TSearchAction = ActionMap<TSearchPayloads>[keyof TSearchPayloads];

const searchReducer = (state: string, action: TStoreReducerAction) => {
  switch (action.type) {
    case EStoreReducerActions.SetSearch:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;

export const setSearchACtion: (payload: string) => TStoreReducerAction = (payload) => {
  return {
    type: EStoreReducerActions.SetSearch,
    payload,
  };
};
