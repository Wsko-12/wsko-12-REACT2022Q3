import React, { memo } from 'react';
import { ICharacter } from 'ts/interfaces';
import styles from './character-cart.module.css';

interface ICharacterCardProps {
  characterData: ICharacter;
  openModal: (data: ICharacter) => void;
}

const CharacterCard = memo<ICharacterCardProps>(({ characterData, openModal }) => {
  const { name } = characterData;
  return (
    //  onClick - useCallback
    <div className={styles.card} onClick={() => openModal(characterData)}>
      <img className={styles.image} src={characterData.image} />
      <span className={styles.title}>{name}</span>
    </div>
  );
});

export default CharacterCard;
