import CharacterCard from 'components/Character/CharacterCard/CharacterCard';
import React, { memo } from 'react';
import { ICharacter } from 'ts/interfaces';
import styles from './character-cart-list.module.css';

interface ICharactersListProps {
  characters: ICharacter[];
  openModal?: (data: ICharacter) => void;
}

const CharactersList = memo<ICharactersListProps>(({ characters, openModal = () => {} }) => {
  return (
    <div className={styles.list}>
      {characters.map((character) => (
        <CharacterCard key={character.id} characterData={character} openModal={openModal} />
      ))}
    </div>
  );
});

export default CharactersList;
