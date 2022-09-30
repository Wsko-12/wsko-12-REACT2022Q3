import React from 'react';
import styles from '../../card.module.css';

interface ICardInfoRowProps {
  icon: string;
  value: string | number;
}

export default function CardInfoRow({ icon, value }: ICardInfoRowProps) {
  return (
    <div className={styles.card__info}>
      <span className="material-symbols-outlined">{icon}</span>
      <span>{value}</span>
    </div>
  );
}
