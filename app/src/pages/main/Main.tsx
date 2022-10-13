import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component, memo } from 'react';
import styles from './main-page.module.css';
import CharactersList from 'components/CharactersList/CharactersList';
import { ICharacter } from 'ts/interfaces';
import API from 'api/API';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';

interface IMainStates {
  characters: ICharacter[];
  pagination: {
    page: number;
    total: number;
  };
  isLoading: boolean;
  isError: boolean;
}

const InnerContent = memo<Pick<IMainStates, 'characters' | 'isLoading' | 'isError'>>(
  ({ isLoading, isError, characters }) => {
    if (isError) {
      return <h3>Sorry, something went wrong :(</h3>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return <CharactersList characters={characters} />;
  }
);

export default class Main extends Component {
  state: IMainStates = {
    characters: [],
    pagination: {
      page: 1,
      total: 1,
    },
    isLoading: false,
    isError: false,
  };

  componentDidMount() {
    const {
      pagination: { page },
    } = this.state;
    this.fetchCharacters(page);
  }

  changePage = (page: number) => {
    if (page != this.state.pagination.page) {
      this.fetchCharacters(page);
    }
  };

  async fetchCharacters(page = 1) {
    this.setState({ isError: false, isLoading: true });
    try {
      const response = await API.getCharacters(page);
      if (!response) {
        this.setState({
          isError: true,
        });
        console.error(`[Characters fetchCharacters] can't receive data`);
        return;
      }
      const characters = response.results;
      const total = response.info.pages;
      this.setState({
        pagination: {
          page,
          total,
        },
      });

      this.setState({ characters });
    } catch {
      this.setState({ isError: true });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isError, isLoading, pagination, characters } = this.state;
    const { page, total } = pagination;
    return (
      <section className={styles.main__wrapper}>
        <SearchBar />
        <div className={styles.main__content}>
          <InnerContent isLoading={isLoading} isError={isError} characters={characters} />
          {!isLoading && !isError && (
            <Pagination page={page} total={total} onChange={this.changePage} />
          )}
        </div>
      </section>
    );
  }
}
