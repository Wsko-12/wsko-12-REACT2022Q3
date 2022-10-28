import { IStore } from '../Store';
import characterReducer, { TCharacterAction } from './characters/CharacterReducer';
import paginationReducer, { TPaginationAction } from './pagination/paginationReducer';
import searchReducer, { TSearchAction } from './search/SearchReducer';

export const enum EStoreReducerActions {
  SetCharacters = 'SET_CHARACTERS',
  SetCurrentPage = 'SET_CURRENT_PAGE',
  SetPagesTotal = 'SET_PAGES_TOTAL',
  SetSearch = 'SET_SEARCH',
}

export type TStoreReducerAction = TCharacterAction | TPaginationAction | TSearchAction;

const storeReducer = ({ characters, pagination, search }: IStore, action: TStoreReducerAction) => ({
  characters: characterReducer(characters, action),
  pagination: paginationReducer(pagination, action),
  search: searchReducer(search, action),
});

export default storeReducer;
