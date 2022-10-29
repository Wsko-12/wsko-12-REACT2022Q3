import { IStore } from '../Store';
import characterReducer, { TCharacterAction } from './characters/CharacterReducer';
import paginationReducer, { TPaginationAction } from './pagination/paginationReducer';
import searchReducer, { TSearchAction } from './search/SearchReducer';
import sortingReducer, { TSortingAction } from './sorting/sortingReducer';

export const enum EStoreReducerActions {
  SetCharacters = 'SET_CHARACTERS',
  SetCurrentPage = 'SET_CURRENT_PAGE',
  SetPagesTotal = 'SET_PAGES_TOTAL',
  SetLimit = 'SET_LIMIT',
  SetSearch = 'SET_SEARCH',
  SetNameSorting = 'SET_NAME_SORTING',
  SetRacesSelected = 'SET_RACES_SELECTED',
}

export type TStoreReducerAction =
  | TCharacterAction
  | TPaginationAction
  | TSearchAction
  | TSortingAction;

const storeReducer = (
  { characters, pagination, search, sorting }: IStore,
  action: TStoreReducerAction
) => ({
  characters: characterReducer(characters, action),
  pagination: paginationReducer(pagination, action),
  search: searchReducer(search, action),
  sorting: sortingReducer(sorting, action),
});

export default storeReducer;
