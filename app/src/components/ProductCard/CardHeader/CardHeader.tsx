import React, { memo } from 'react';
import styles from '../card.module.css';

interface ICardHeaderProps {
  brand: string;
  model: string;
}

const CardHeader = memo<ICardHeaderProps>(({ brand, model }) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.title}>{brand}</h3>
      <p className={styles.subtitle}>{model}</p>
    </div>
  );
});
export default CardHeader;
