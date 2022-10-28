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
  const { page, total } = store.pagination;

  const fetchCharacters = async () => {
    console.log('fetching');
    const response = await loadCharacters(page, search);
    if (response) {
      dispatch({ type: EStoreReducerActions.SetCharacters, payload: response.results });
      dispatch({ type: EStoreReducerActions.SetPagesTotal, payload: response.info.pages });
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [search, page]);

  const onSearch = (search: string) => {
    dispatch({ type: EStoreReducerActions.SetSearch, payload: search });
    dispatch({ type: EStoreReducerActions.SetCurrentPage, payload: 1 });
  };

  const onPagination = (page: number) => {
    dispatch({ type: EStoreReducerActions.SetCurrentPage, payload: page });
  };

  return (
    <section className={styles.wrapper}>
      <SearchBar defaultValue={search} onSearch={onSearch} />
      <InnerContent isError={isError} isLoading={isLoading} characters={store.characters} />
      <Pagination page={page} total={total} onChange={onPagination} />
    </section>
  );
});

export default Main;
