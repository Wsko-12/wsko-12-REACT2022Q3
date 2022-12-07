import { EntityId } from '@reduxjs/toolkit';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from 'store-redux/hooks';
import { selectCharacterByID } from 'store-redux/slices/characterSlice';
import styles from './character-cart.module.css';

interface ICharacterCardProps {
  characterID: EntityId;
}

const CharacterCard = memo<ICharacterCardProps>(({ characterID }) => {
  const data = useAppSelector(selectCharacterByID(characterID));
  if (!data) {
    return null;
  }
  return (
    <Link to={`/${data._id}`}>
      <div className={styles.card}>
        <span className={styles.title}>{data.name}</span>
      </div>
    </Link>
  );
});

export default CharacterCard;
