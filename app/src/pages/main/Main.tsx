/* eslint-disable prettier/prettier */
import SearchBar from 'components/SearchBar/SearchBar';
import React, { Component, memo } from 'react';
import styles from './main-page.module.css';
import CharactersList from 'components/Character/CharactersList/CharactersList';
import { ICharacter, TApiResponse } from 'ts/interfaces';
import API from 'api/API';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import CharacterModalContent from 'components/Character/CharacterModalContent/CharacterModalContent';

// const testCharacter: ICharacter = {"id":1,"name":"Rick Sanchez","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg","episode":["https://rickandmortyapi.com/api/episode/1","https://rickandmortyapi.com/api/episode/2","https://rickandmortyapi.com/api/episode/3","https://rickandmortyapi.com/api/episode/4","https://rickandmortyapi.com/api/episode/5","https://rickandmortyapi.com/api/episode/6","https://rickandmortyapi.com/api/episode/7","https://rickandmortyapi.com/api/episode/8","https://rickandmortyapi.com/api/episode/9","https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/11","https://rickandmortyapi.com/api/episode/12","https://rickandmortyapi.com/api/episode/13","https://rickandmortyapi.com/api/episode/14","https://rickandmortyapi.com/api/episode/15","https://rickandmortyapi.com/api/episode/16","https://rickandmortyapi.com/api/episode/17","https://rickandmortyapi.com/api/episode/18","https://rickandmortyapi.com/api/episode/19","https://rickandmortyapi.com/api/episode/20","https://rickandmortyapi.com/api/episode/21","https://rickandmortyapi.com/api/episode/22","https://rickandmortyapi.com/api/episode/23","https://rickandmortyapi.com/api/episode/24","https://rickandmortyapi.com/api/episode/25","https://rickandmortyapi.com/api/episode/26","https://rickandmortyapi.com/api/episode/27","https://rickandmortyapi.com/api/episode/28","https://rickandmortyapi.com/api/episode/29","https://rickandmortyapi.com/api/episode/30","https://rickandmortyapi.com/api/episode/31","https://rickandmortyapi.com/api/episode/32","https://rickandmortyapi.com/api/episode/33","https://rickandmortyapi.com/api/episode/34","https://rickandmortyapi.com/api/episode/35","https://rickandmortyapi.com/api/episode/36","https://rickandmortyapi.com/api/episode/37","https://rickandmortyapi.com/api/episode/38","https://rickandmortyapi.com/api/episode/39","https://rickandmortyapi.com/api/episode/40","https://rickandmortyapi.com/api/episode/41","https://rickandmortyapi.com/api/episode/42","https://rickandmortyapi.com/api/episode/43","https://rickandmortyapi.com/api/episode/44","https://rickandmortyapi.com/api/episode/45","https://rickandmortyapi.com/api/episode/46","https://rickandmortyapi.com/api/episode/47","https://rickandmortyapi.com/api/episode/48","https://rickandmortyapi.com/api/episode/49","https://rickandmortyapi.com/api/episode/50","https://rickandmortyapi.com/api/episode/51"],"url":"https://rickandmortyapi.com/api/character/1","created":"2017-11-04T18:48:46.250Z"}

interface IMainStates {
  characters: ICharacter[];
  pagination: {
    page: number;
    total: number;
  };
  isLoading: boolean;
  isError: boolean;
  searchQuery: string;
  modalData: null | ICharacter;
}
interface IMainProps {
  str?: string;
}

interface IInnerContentProps {
  characters: ICharacter[];
  isLoading: boolean;
  isError: boolean;
  openModal: (data: ICharacter) => void
}

const InnerContent = memo<IInnerContentProps>(
  ({ isLoading, isError, characters, openModal }) => {
    if (isError) {
      return <h3>Sorry, something went wrong :(</h3>;
    }

    if (isLoading) {
      return <Loader />;
    }

    if (characters.length < 1) {
      return <h3>Nothing found</h3>;
    }

    return <CharactersList characters={characters} openModal={openModal}/>;
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
    modalData: null,
  };

  toggleModal = (modalData: ICharacter | null) => {
    this.setState({ modalData });
  }

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
    const { isError, isLoading, pagination, characters, modalData } = this.state;
    const { page, total } = pagination;
    return (
      <section className={styles.main__wrapper}>
        <SearchBar onSearch={this.handleSearch} />
        <div className={styles.main__content}>
          <InnerContent isLoading={isLoading} isError={isError} characters={characters} openModal={this.toggleModal}/>
          {!isLoading && !isError && (
            <Pagination page={page} total={total} onChange={this.changePage} />
          )}
          {modalData && <Modal onClose={() => this.toggleModal(null)}><CharacterModalContent data={modalData}/></Modal>}
        </div> 
      </section>
    );
  }
}
