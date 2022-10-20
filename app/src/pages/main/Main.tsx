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
import { useDataLoader } from 'hooks/customHooks';
import { getSavedSearchQuery } from 'utils/utils';

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

const Main = memo(() => {
  const [searchQuery, setSearchQuery] = useState(getSavedSearchQuery);
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
