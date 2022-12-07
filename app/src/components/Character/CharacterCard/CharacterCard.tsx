import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { ICharacter } from 'ts/interfaces';
import styles from './character-cart.module.css';

interface ICharacterCardProps {
  characterData: ICharacter;
  openModal: (data: ICharacter) => void;
}

const CharacterCard = memo<ICharacterCardProps>(({ characterData, openModal }) => {
  const { name } = characterData;
  return (
    <Link to={`/${characterData._id}`}>
      <div className={styles.card} onClick={() => openModal(characterData)}>
        <span className={styles.title}>{name}</span>
      </div>
    </Link>
  );
});

export default CharacterCard;
