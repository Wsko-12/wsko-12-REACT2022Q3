import React, { createContext, memo, ReactNode, useReducer } from 'react';
import { ICharacter } from 'ts/interfaces';
import { getSavedSearchQuery } from 'utils/utils';
import storeReducer, { TStoreReducerAction } from './reducers/StoreReducer';

export interface IStore {
  characters: ICharacter[] | null;
  pagination: {
    page: number;
    total: number;
  };
  search: string;
}

const initialState: IStore = {
  characters: null,
  pagination: {
    page: 1,
    total: 1,
  },
  search: getSavedSearchQuery(),
};

export const StoreContext = createContext<[IStore, React.Dispatch<TStoreReducerAction>]>([
  initialState,
  () => null,
]);

interface IStoreProps {
  children: ReactNode;
}

const Store = memo<IStoreProps>(({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);
  return <StoreContext.Provider value={[state, dispatch]}>{children}</StoreContext.Provider>;
});

export default Store;
