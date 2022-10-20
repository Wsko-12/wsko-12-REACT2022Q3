import React, { memo } from 'react';
import styles from '../../card.module.css';

interface ICardInfoRowProps {
  icon: string;
  value: string | number;
}

const CardInfoRow = memo<ICardInfoRowProps>(({ icon, value }) => {
  return (
    <div className={styles.info}>
      <span className="material-symbols-outlined">{icon}</span>
      <span>{value}</span>
    </div>
  );
});

export default CardInfoRow;
