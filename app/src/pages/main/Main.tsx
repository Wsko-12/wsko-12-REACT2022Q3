import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component } from 'react';
import styles from './main-page.module.css';
import CharactersList from 'components/CharactersList/CharactersList';

export default class Main extends Component {
  render() {
    return (
      <section className={styles.main__wrapper}>
        <SearchBar />
        <div className={styles.main__content}>
          <CharactersList />
        </div>
      </section>
    );
  }
}
