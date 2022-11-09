import { EntityId } from '@reduxjs/toolkit';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'store-redux/hooks';
import { selectCharacterByID } from 'store-redux/slices/characterSlice';
import { ICharacter } from 'ts/interfaces';
import styles from './character-cart.module.css';

interface ICharacterCardProps {
  characterIDs: EntityId;
  openModal: (data: ICharacter) => void;
}

const CharacterCard = memo<ICharacterCardProps>(({ characterIDs, openModal }) => {
  const data = useAppSelector(selectCharacterByID(characterIDs));
  if (!data) {
    return null;
  }
  return (
    <Link to={`/${data._id}`}>
      <div className={styles.card} onClick={() => openModal(data)}>
        <span className={styles.title}>{data.name}</span>
      </div>
    </Link>
  );
});

export default CharacterCard;
