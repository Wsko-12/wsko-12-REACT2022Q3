import React, { memo } from 'react';
import styles from '../card.module.css';

interface ICardHeaderProps {
  brand: string;
  model: string;
}

const CardHeader = memo<ICardHeaderProps>(({ brand, model }) => {
  return (
    <div className={styles.card__header}>
      <h3 className={styles.card__title}>{brand}</h3>
      <p className={styles.card__subtitle}>{model}</p>
    </div>
  );
});
export default CardHeader;
