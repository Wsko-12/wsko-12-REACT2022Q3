import CardsList from 'components/CardsList/CardsList';
import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component } from 'react';
import './main-page.css';

export default class Main extends Component {
  render() {
    return (
      <section className="wrapper main__wrapper">
        <SearchBar />
        <CardsList />
      </section>
    );
  }
}
