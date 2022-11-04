import React, { memo, useCallback, useContext, useEffect } from 'react';
import styles from './main-page.module.css';
import CharactersList from 'components/Character/CharactersList/CharactersList';
import { ICharacter } from 'ts/interfaces';
import API from 'api/API';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';
import { useDataLoader } from 'hooks/customHooks';

import { StoreContext } from 'store/Store';
import SearchBar from 'components/SearchBar/SearchBar';
import CharacterFilters from './filters/CharacterFilters';
import { ESortingOrder } from 'ts/enums';
import { addCharactersAction } from 'store/reducers/characters/CharacterReducer';
import {
  setCurrentPageAction,
  setPageLimitAction,
  setTotalPagesAction,
} from 'store/reducers/pagination/paginationReducer';
import { setSearchACtion } from 'store/reducers/search/SearchReducer';

interface IInnerContentProps {
  isLoading: boolean;
  isError: boolean;
  characters: ICharacter[] | null;
}
const InnerContent = memo<IInnerContentProps>(({ isLoading, characters, isError }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError || !characters) {
    return <div>Sorry, something went wrong</div>;
  }

  return <CharactersList characters={characters} />;
});

const Main = memo(() => {
  const [store, dispatch] = useContext(StoreContext);
  const { isLoading, isError, load: loadCharacters } = useDataLoader(API.getCharacters);
  const {
    search,
    sorting: { name: nameSort, races, gender },
    characters,
  } = store;
  const { limit, page, total } = store.pagination;

  const fetchCharacters = async (
    limit: number,
    page: number,
    search: string,
    nameSort: ESortingOrder,
    races: Set<string>,
    gender: Set<string>
  ) => {
    const response = await loadCharacters(limit, page, search, nameSort, races, gender);
    if (response) {
      dispatch(addCharactersAction(response.docs));
      dispatch(setTotalPagesAction(response.pages));
    }
  };

  useEffect(() => {
    if (!characters) {
      fetchCharacters(limit, page, search, nameSort, races, gender);
    }
  }, [search, page, limit, nameSort, races, gender, characters]);

  const onSearch = useCallback(
    (search: string) => {
      dispatch(setSearchACtion(search));
      dispatch(setCurrentPageAction(1));
    },
    [dispatch]
  );

  const onPagination = useCallback((page: number) => {
    dispatch(setCurrentPageAction(page));
  }, []);

  const onLimitChange = useCallback((limit: string) => {
    dispatch(setPageLimitAction(Number(limit)));
  }, []);

  return (
    <section className={styles.wrapper}>
      <SearchBar defaultValue={search} onSearch={onSearch} />
      <CharacterFilters />
      <InnerContent isError={isError} isLoading={isLoading} characters={store.characters} />
      <Pagination
        limit={limit}
        page={page}
        total={total}
        onChange={onPagination}
        onLimitChange={onLimitChange}
      />
    </section>
  );
});

export default Main;
