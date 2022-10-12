import RatingBar from 'components/RatingBar/RatingBar';
import React, { memo } from 'react';
import styles from '../card.module.css';

interface ICardFooterProps {
  rating: number;
}

const CardFooter = memo<ICardFooterProps>(({ rating }) => {
  return (
    <div className={styles.card__footer}>
      <RatingBar rating={rating} classes={styles['card__rating-container']} />
    </div>
  );
});

export default CardFooter;
