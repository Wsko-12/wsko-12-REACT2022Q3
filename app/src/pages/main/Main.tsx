import React, { memo, useCallback } from 'react';
import styles from './main-page.module.css';
import CharactersList from 'components/Character/CharactersList/CharactersList';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';

import SearchBar from 'components/SearchBar/SearchBar';
import CharacterFilters from './filters/CharacterFilters';
import { useAppDispatch, useAppSelector, useFirstDownload } from 'store-redux/hooks';
import { charactersFlagsSelectors } from 'store-redux/slices/characterSlice';
import { selectSearch, setSearch } from 'store-redux/slices/searchSlice';
import { paginationSelector, setLimit, setPage } from 'store-redux/slices/paginationSlice';

interface IInnerContentProps {
  isLoading: boolean;
  isError: boolean;
}
const InnerContent = memo<IInnerContentProps>(({ isLoading, isError }) => {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Sorry, something went wrong</div>;
  }

  return <CharactersList />;
});

// segregate big components for smaller - its best time/complexity solution to improve performance
const SearchContainer = () => {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);

  const onSearch = useCallback(
    (search: string) => {
      dispatch(setSearch(search));
    },
    [dispatch]
  );

  return <SearchBar defaultValue={search} onSearch={onSearch} />;
};

const Main = memo(() => {
  const { isLoading, isError } = useAppSelector(charactersFlagsSelectors);

  const { page, total, limit } = useAppSelector(paginationSelector);

  const dispatch = useAppDispatch();

  useFirstDownload();

  const onPagination = useCallback((page: number) => {
    dispatch(setPage(page));
  }, []);

  const onLimitChange = useCallback((limit: string) => {
    dispatch(setLimit(Number(limit)));
  }, []);

  return (
    <section className={styles.wrapper}>
      <SearchContainer />
      <CharacterFilters />
      <InnerContent isError={isError} isLoading={isLoading} />
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
