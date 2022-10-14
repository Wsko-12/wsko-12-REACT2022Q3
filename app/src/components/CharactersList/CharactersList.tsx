import CharacterCard from 'components/CharacterCard/CharacterCard';
import React, { memo } from 'react';
import { ICharacter } from 'ts/interfaces';
import styles from './character-cart-list.module.css';

interface ICharactersListProps {
  characters: ICharacter[];
}

const CharactersList = memo<ICharactersListProps>(({ characters }) => {
  return (
    <div className={styles.list}>
      {characters.map((character) => (
        <CharacterCard key={character.id} characterData={character} />
      ))}
    </div>
  );
});

export default CharactersList;
