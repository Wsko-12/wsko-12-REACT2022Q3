import React, { Component } from 'react';
import { ELSKeys } from 'ts/enums';
import './search-bar.css';

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
    const value = e?.target.value;
    this.setState({ value });
  };

  componentWillUnmount() {
    localStorage.setItem(ELSKeys.search, this.state.value);
  }

  render() {
    return (
      <div className="search-bar">
        <span className="material-symbols-outlined search-bar__icon">search</span>
        <input
          type="text"
          value={this.state.value}
          onChange={this.inputHandler}
          className="search-bar__input"
          placeholder="Search..."
        />
      </div>
    );
  }
}
