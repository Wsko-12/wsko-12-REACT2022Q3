import React, { Component } from 'react';
import { ELSKeys } from 'ts/enums';
import styles from './search-bar.module.css';

export default class SearchBar extends Component {
  state = {
    value: '',
  };

  // And calls componentWillUnmount and saves to LS empty value
  componentDidMount() {
    const savedValue = localStorage.getItem(ELSKeys.search);
    this.setState({ value: savedValue || '' });
  }

  inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    this.setState({ value });
  };

  componentWillUnmount() {
    localStorage.setItem(ELSKeys.search, this.state.value);
  }

  render() {
    return (
      <div className={styles['search-bar']}>
        <span className={`material-symbols-outlined ${styles['search-bar__icon']}`}>search</span>
        <input
          type="text"
          value={this.state.value}
          onChange={this.inputHandler}
          className={styles['search-bar__input']}
          placeholder="Search..."
        />
      </div>
    );
  }
}
