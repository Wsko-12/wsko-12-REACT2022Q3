import SearchBar from 'components/SearchBar/SearchBar';
import React, { memo, useEffect, useState } from 'react';
import styles from './main-page.module.css';
import CharactersList from 'components/Character/CharactersList/CharactersList';
import { ICharacter } from 'ts/interfaces';
import API from 'api/API';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';
import CharacterModalContent from 'components/Character/CharacterModalContent/CharacterModalContent';

// const testCharacter: ICharacter = {"id":1,"name":"Rick Sanchez","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"Earth (C-137)","url":"https://rickandmortyapi.com/api/location/1"},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/1.jpeg","episode":["https://rickandmortyapi.com/api/episode/1","https://rickandmortyapi.com/api/episode/2","https://rickandmortyapi.com/api/episode/3","https://rickandmortyapi.com/api/episode/4","https://rickandmortyapi.com/api/episode/5","https://rickandmortyapi.com/api/episode/6","https://rickandmortyapi.com/api/episode/7","https://rickandmortyapi.com/api/episode/8","https://rickandmortyapi.com/api/episode/9","https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/11","https://rickandmortyapi.com/api/episode/12","https://rickandmortyapi.com/api/episode/13","https://rickandmortyapi.com/api/episode/14","https://rickandmortyapi.com/api/episode/15","https://rickandmortyapi.com/api/episode/16","https://rickandmortyapi.com/api/episode/17","https://rickandmortyapi.com/api/episode/18","https://rickandmortyapi.com/api/episode/19","https://rickandmortyapi.com/api/episode/20","https://rickandmortyapi.com/api/episode/21","https://rickandmortyapi.com/api/episode/22","https://rickandmortyapi.com/api/episode/23","https://rickandmortyapi.com/api/episode/24","https://rickandmortyapi.com/api/episode/25","https://rickandmortyapi.com/api/episode/26","https://rickandmortyapi.com/api/episode/27","https://rickandmortyapi.com/api/episode/28","https://rickandmortyapi.com/api/episode/29","https://rickandmortyapi.com/api/episode/30","https://rickandmortyapi.com/api/episode/31","https://rickandmortyapi.com/api/episode/32","https://rickandmortyapi.com/api/episode/33","https://rickandmortyapi.com/api/episode/34","https://rickandmortyapi.com/api/episode/35","https://rickandmortyapi.com/api/episode/36","https://rickandmortyapi.com/api/episode/37","https://rickandmortyapi.com/api/episode/38","https://rickandmortyapi.com/api/episode/39","https://rickandmortyapi.com/api/episode/40","https://rickandmortyapi.com/api/episode/41","https://rickandmortyapi.com/api/episode/42","https://rickandmortyapi.com/api/episode/43","https://rickandmortyapi.com/api/episode/44","https://rickandmortyapi.com/api/episode/45","https://rickandmortyapi.com/api/episode/46","https://rickandmortyapi.com/api/episode/47","https://rickandmortyapi.com/api/episode/48","https://rickandmortyapi.com/api/episode/49","https://rickandmortyapi.com/api/episode/50","https://rickandmortyapi.com/api/episode/51"],"url":"https://rickandmortyapi.com/api/character/1","created":"2017-11-04T18:48:46.250Z"}

interface IInnerContentProps {
  characters: ICharacter[];
  isLoading: boolean;
  isError: boolean;
  openModal: (data: ICharacter) => void;
  pagination: {
    page: number;
    total: number;
    onChange: (page: number) => void;
  };
}

const InnerContent = memo<IInnerContentProps>(
  ({ isLoading, isError, characters, openModal, pagination }) => {
    if (isError) {
      // there is a problem with this API
      // when there are no results for a search query, a 404 error is returned
      // as far as I know normally the API should return an empty array of results in this case.
      // I can pass an argument like "isSearchQuery" but that would be like a hot fix
      return <h3>Sorry, something went wrong :(</h3>;
    }

    if (isLoading) {
      return <Loader />;
    }

    if (characters.length < 1) {
      return <h3>Nothing found</h3>;
    }

    const { page, total, onChange } = pagination;

    return (
      <>
        <CharactersList characters={characters} openModal={openModal} />
        <Pagination page={page} total={total} onChange={onChange} />
      </>
    );
  }
);

function useDataLoader<T extends (...args: Parameters<T>) => ReturnType<T>>(loader: T) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function load(...args: Parameters<T>) {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await loader(...args);
      if (!response) {
        setIsError(true);
        return;
      }
      return response;
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isError,
    isLoading,
    load,
  };
}

// function usePagination() {
//   const [page, setPage] = useState(1);
//   const [total, setTotal] = useState(1);

//   return {
//     page,
//     total,
//     setPage,
//     setTotal,
//   };
// }

const Main = memo(() => {
  const [searchQuery, setSearchQuery] = useState('');
  const [modalData, setModalData] = useState<ICharacter | null>(null);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(1);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const { isLoading, isError, load: loadCharacters } = useDataLoader(API.getCharacters);

  const handleSearch = async (searchQuery: string) => {
    setSearchQuery(searchQuery);
    setPage(1);
  };

  const changePage = (current: number) => {
    setPage(current);
  };

  const fetchCharacters = async (page: number, searchQuery: string) => {
    const response = await loadCharacters(page, searchQuery);
    if (response) {
      const characters = response.results;
      const total = response.info.pages;
      setCharacters(characters);
      setTotal(total);
    }
  };

  useEffect(() => {
    fetchCharacters(page, searchQuery);
  }, [page, searchQuery]);

  return (
    <section className={styles.main__wrapper}>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.main__content}>
        <InnerContent
          isLoading={isLoading}
          isError={isError}
          characters={characters}
          // it's ok or I have to create toggleModal like in prev task?
          openModal={setModalData}
          pagination={{ page, total, onChange: changePage }}
        />
        {modalData && (
          <Modal onClose={() => setModalData(null)}>
            <CharacterModalContent data={modalData} />
          </Modal>
        )}
      </div>
    </section>
  );
});

export default Main;
