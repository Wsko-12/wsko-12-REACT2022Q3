import { useInput } from 'hooks/customHooks';
import React, { memo, useEffect } from 'react';
import { ELSKeys } from 'ts/enums';
import { getSavedSearchQuery } from 'utils/utils';
import styles from './search-bar.module.css';

interface ISearchBarProps {
  onSearch?: (query: string) => void;
}

const SearchBar = memo<ISearchBarProps>(({ onSearch }) => {
  const search = useInput(getSavedSearchQuery);

  function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    if (onSearch) {
      onSearch(search.value);
    }
  }

  // unmount
  useEffect(() => () => localStorage.setItem(ELSKeys.search, search.value));

  return (
    <form className={styles['search-bar']}>
      <span className={`material-symbols-outlined ${styles['search-bar__icon']}`}>search</span>
      <input
        type="text"
        className={styles['search-bar__input']}
        placeholder="Search..."
        {...search}
      />
      <input
        type="submit"
        onClick={handleSubmit}
        className={styles['search-bar__button']}
        value="find"
      />
    </form>
  );
});

export default SearchBar;
