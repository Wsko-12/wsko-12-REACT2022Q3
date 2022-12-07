import RatingBar from 'components/RatingBar/RatingBar';
import React from 'react';
import styles from '../card.module.css';

interface ICardFooterProps {
  rating: number;
}
export default function CardFooter({ rating }: ICardFooterProps) {
  return (
    <div className={styles.card__footer}>
      <RatingBar rating={rating} classes={styles['card__rating-container']} />
    </div>
  );
}
