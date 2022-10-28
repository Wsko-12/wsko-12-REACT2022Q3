import React, { memo, useContext, useEffect } from 'react';
import styles from './main-page.module.css';
import CharactersList from 'components/Character/CharactersList/CharactersList';
import { ICharacter } from 'ts/interfaces';
import API from 'api/API';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';
import { useDataLoader } from 'hooks/customHooks';

import { StoreContext } from 'api/store/Store';
import { EStoreReducerActions } from 'api/store/reducers/StoreReducer';
import SearchBar from 'components/SearchBar/SearchBar';
import CharacterFilters from './filters/CharacterFilters';

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
  const { search } = store;
  const { limit, page, total } = store.pagination;

  const fetchCharacters = async (limit: number, page: number, search: string) => {
    const response = await loadCharacters(limit, page, search);
    if (response) {
      dispatch({ type: EStoreReducerActions.SetCharacters, payload: response.docs });
      dispatch({ type: EStoreReducerActions.SetPagesTotal, payload: response.pages });
    }
  };

  useEffect(() => {
    fetchCharacters(limit, page, search);
  }, [search, page, limit]);

  const onSearch = (search: string) => {
    dispatch({ type: EStoreReducerActions.SetSearch, payload: search });
    dispatch({ type: EStoreReducerActions.SetCurrentPage, payload: 1 });
  };

  const onPagination = (page: number) => {
    dispatch({ type: EStoreReducerActions.SetCurrentPage, payload: page });
  };

  const onLimitChange = (limit: string) => {
    dispatch({ type: EStoreReducerActions.SetLimit, payload: Number(limit) });
  };

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
