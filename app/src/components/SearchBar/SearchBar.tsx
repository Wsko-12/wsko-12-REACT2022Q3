import React, { Component } from 'react';
import { ELSKeys } from 'ts/enums';
import styles from './search-bar.module.css';

interface ISearchBarProps {
  onSearch?: (query: string) => void;
}

export default class SearchBar extends Component<ISearchBarProps> {
  state = {
    value: '',
  };

  componentDidMount() {
    const savedValue = localStorage.getItem(ELSKeys.search);
    this.setState({ value: savedValue || '' });
  }

  inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const { onSearch } = this.props;
    if (onSearch) {
      onSearch(this.state.value);
    }
  };

  componentWillUnmount() {
    localStorage.setItem(ELSKeys.search, this.state.value);
  }

  render() {
    return (
      <form className={styles['search-bar']}>
        <span className={`material-symbols-outlined ${styles['search-bar__icon']}`}>search</span>
        <input
          type="text"
          value={this.state.value}
          onChange={this.inputHandler}
          className={styles['search-bar__input']}
          placeholder="Search..."
        />
        <input
          type="submit"
          onClick={this.handleSubmit}
          className={styles['search-bar__button']}
          value="find"
        />
      </form>
    );
  }
}
