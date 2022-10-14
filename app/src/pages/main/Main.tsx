/* eslint-disable prettier/prettier */
import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component, memo } from 'react';
import styles from './main-page.module.css';
import CharactersList from 'components/CharactersList/CharactersList';
import { ICharacter, TApiResponse } from 'ts/interfaces';
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
  searchQuery: string;
}
interface IMainProps {
  str?: string;
}

const InnerContent = memo<Pick<IMainStates, 'characters' | 'isLoading' | 'isError'>>(
  ({ isLoading, isError, characters }) => {
    if (isError) {
      return <h3>Sorry, something went wrong :(</h3>;
    }

    if (isLoading) {
      return <Loader />;
    }

    if (characters.length < 1) {
      return <h3>Nothing found</h3>;
    }

    return <CharactersList characters={characters} />;
  }
);

export default class Main extends Component<IMainProps, IMainStates> {
  state: IMainStates = {
    characters: [],
    pagination: {
      page: 1,
      total: 1,
    },
    isLoading: false,
    isError: false,
    searchQuery: '',
  };

  componentDidMount() {
    this.fetchCharacters(1, '');
  }

  changePage = (page: number) => {
    if (page != this.state.pagination.page) {
      this.setState((state) => ({pagination: {...state.pagination, page}}));
      const { searchQuery } = this.state
      this.fetchCharacters(page, searchQuery);
    }
  };

  applyResponse(response: TApiResponse<ICharacter>) {
    const characters = response.results;
    const total = response.info.pages;

    this.setState((state) => ({
      characters,
      pagination: {
        ...state.pagination,
        total,
      },
    }));
  }

  handleSearch = async (searchQuery: string) => {
    this.setState({ searchQuery });
    this.setState((state) => ({pagination: {...state.pagination, page: 1}}));

    try{
      await this.fetchCharacters(1, searchQuery);
    }catch{
      this.setState({characters:[], isError: false, pagination: {page: 1, total: 1}})
    }
  };

  async fetchCharacters(page: number, searchQuery: string) {
    this.setState({ isError: false, isLoading: true });
    try {
      const response = await API.getCharacters(page, searchQuery);
      if (!response) {
        this.setState({
          isError: true,
        });
        return;
      }
      this.applyResponse(response);
    } catch (e) {
      this.setState({ isError: true });
      throw e;
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isError, isLoading, pagination, characters } = this.state;
    const { page, total } = pagination;
    return (
      <section className={styles.main__wrapper}>
        <SearchBar onSearch={this.handleSearch} />
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
