import { EStoreReducerActions, TStoreReducerAction } from '../StoreReducer';

interface ISetSearchAction {
  type: EStoreReducerActions.SetSearch;
  payload: string;
}

export type TSearchAction = ISetSearchAction;

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
