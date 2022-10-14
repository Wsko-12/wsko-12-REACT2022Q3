import React, { memo } from 'react';
import { ICharacter } from 'ts/interfaces';
import styles from './character-cart.module.css';

interface ICharacterCardProps {
  characterData: ICharacter;
}

const CharacterCard = memo<ICharacterCardProps>(({ characterData }) => {
  const { name } = characterData;
  return (
    <div className={styles.card}>
      <img className={styles.image} src={characterData.image} />
      <span className={styles.title}>{name}</span>
    </div>
  );
});

export default CharacterCard;
