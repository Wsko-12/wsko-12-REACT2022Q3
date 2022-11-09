import CharacterCard from 'components/Character/CharacterCard/CharacterCard';
import React, { memo } from 'react';
import { useAppSelector } from 'store-redux/hooks';
import { charactersSelectors } from 'store-redux/slices/characterSlice';
import { ICharacter } from 'ts/interfaces';
import styles from './character-cart-list.module.css';

interface ICharactersListProps {
  openModal?: (data: ICharacter) => void;
}

const CharactersList = memo<ICharactersListProps>(({ openModal = () => {} }) => {
  const charactersIDs = useAppSelector(charactersSelectors.selectIds);
  return (
    <div className={styles.list}>
      {charactersIDs.length === 0
        ? 'Nothing found'
        : charactersIDs.map((character) => (
            <CharacterCard key={character} characterIDs={character} openModal={openModal} />
          ))}
    </div>
  );
});

export default CharactersList;
