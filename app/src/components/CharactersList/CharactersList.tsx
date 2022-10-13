import API from 'api/API';
import CharacterCard from 'components/CharacterCard/CharacterCard';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import React, { Component, memo } from 'react';
import { Route } from 'react-router-dom';
import { ICharacter } from 'ts/interfaces';
interface ICharactersListProps {
  str?: string;
}

interface ICharactersListStates {
  characters: ICharacter[];
  pagination: {
    page: number;
    total: number;
  };
  isLoading: boolean;
  isError: boolean;
}

const InnerContent = memo<Pick<ICharactersListStates, 'characters' | 'isLoading' | 'isError'>>(
  ({ isLoading, isError, characters }) => {
    if (isError) {
      return <h3>Sorry, something went wrong :(</h3>;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <section>
        {characters.map((character) => (
          <CharacterCard key={character.id} characterData={character} />
        ))}
      </section>
    );
  }
);

export default class CharactersList extends Component<ICharactersListProps, ICharactersListStates> {
  state = {
    characters: [],
    isLoading: false,
    isError: false,
    pagination: {
      page: 39,
      total: 1,
    },
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

  componentDidMount() {
    const {
      pagination: { page },
    } = this.state;
    this.fetchCharacters(page);
  }

  render() {
    const { isError, isLoading, characters, pagination } = this.state;
    const { page, total } = pagination;
    return (
      <>
        <InnerContent isLoading={isLoading} isError={isError} characters={characters} />
        <Pagination page={page} total={total} />
      </>
    );
  }
}
