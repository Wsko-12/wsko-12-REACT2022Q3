import { useInput } from 'hooks/customHooks';
import React, { memo, useEffect } from 'react';
import { ELSKeys } from 'ts/enums';
import styles from './search-bar.module.css';

interface ISearchBarProps {
  defaultValue?: string;
  onSearch?: (query: string) => void;
}

const SearchBar = memo<ISearchBarProps>(({ onSearch, defaultValue }) => {
  const search = useInput(defaultValue || '');

  function handleSubmit(e: React.FormEvent<HTMLInputElement>) {
    e.preventDefault();
    if (onSearch) {
      onSearch(search.value);
    }
  }

  useEffect(() => () => localStorage.setItem(ELSKeys.search, search.value));

  return (
    <form className={styles.bar}>
      <span className={`material-symbols-outlined ${styles.icon}`}>search</span>
      <input type="text" className={styles.input} placeholder="Search..." {...search} />
      <input type="submit" onClick={handleSubmit} className={styles.button} value="find" />
    </form>
  );
});

export default SearchBar;
