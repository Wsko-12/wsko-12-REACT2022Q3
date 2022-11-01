import { ICardFormValues } from 'pages/form/CardFormWithUseForm/CardForm';
import React, { createContext, memo, ReactNode, useReducer } from 'react';
import { ESortingOrder } from 'ts/enums';
import { ICharacter } from 'ts/interfaces';
import { getSavedSearchQuery } from 'utils/utils';
import storeReducer, { TStoreReducerAction } from './reducers/StoreReducer';

export interface IStore {
  characters: ICharacter[] | null;
  pagination: {
    page: number;
    total: number;
    limit: number;
  };
  search: string;
  sorting: {
    name: ESortingOrder;
    races: Set<string>;
    gender: Set<string>;
  };
  form: ICardFormValues;
}

const today = new Date().toLocaleDateString('en-CA');

const initialState: IStore = {
  characters: null,
  pagination: {
    page: 1,
    total: 1,
    limit: 20,
  },
  search: getSavedSearchQuery(),
  sorting: {
    name: ESortingOrder.ASC,
    races: new Set(['Hobbit', 'Orc', 'Goblin', 'Human', 'Elf', 'Maiar']),
    gender: new Set(['Male', 'Female']),
  },
  form: {
    name: '',
    surname: '',
    email: '',
    birthday: today,
    delivery: today,
    country: '',
    zip: '',
    installBrowsers: true,
    notifications: '',
    consent: true,
  },
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
