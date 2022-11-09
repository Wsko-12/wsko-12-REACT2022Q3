import CharacterCard from 'components/Character/CharacterCard/CharacterCard';
import React, { memo } from 'react';
import { useAppSelector } from 'store-redux/hooks';
import { charactersSelectors } from 'store-redux/slices/characterSlice';
import styles from './character-cart-list.module.css';

const CharactersList = memo(() => {
  const charactersIDs = useAppSelector(charactersSelectors.selectIds);
  return (
    <div className={styles.list}>
      {charactersIDs.length === 0
        ? 'Nothing found'
        : charactersIDs.map((id) => <CharacterCard key={id} characterID={id} />)}
    </div>
  );
});

export default CharactersList;
