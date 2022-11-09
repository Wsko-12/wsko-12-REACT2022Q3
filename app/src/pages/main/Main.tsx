import React, { memo, useCallback } from 'react';
import styles from './main-page.module.css';
import CharactersList from 'components/Character/CharactersList/CharactersList';
import { ICharacter } from 'ts/interfaces';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';

import SearchBar from 'components/SearchBar/SearchBar';
import CharacterFilters from './filters/CharacterFilters';
import { useAppDispatch, useAppSelector, useFirstDownload } from 'store-redux/hooks';
import { selectCharacters } from 'store-redux/slices/characterSlice';
import { selectSearch, setSearch } from 'store-redux/slices/searchSlice';
import { paginationSelector, setLimit, setPage } from 'store-redux/slices/paginationSlice';

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
  const { characters, isLoading, isError } = useAppSelector(selectCharacters);
  const { page, total, limit } = useAppSelector(paginationSelector);
  const search = useAppSelector(selectSearch);

  const dispatch = useAppDispatch();

  useFirstDownload();

  const onSearch = useCallback(
    (search: string) => {
      dispatch(setSearch(search));
    },
    [dispatch]
  );

  const onPagination = useCallback((page: number) => {
    dispatch(setPage(page));
  }, []);

  const onLimitChange = useCallback((limit: string) => {
    dispatch(setLimit(Number(limit)));
  }, []);

  return (
    <section className={styles.wrapper}>
      <SearchBar defaultValue={search} onSearch={onSearch} />
      <CharacterFilters />
      <InnerContent isError={isError} isLoading={isLoading} characters={characters} />
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
