import React, { memo } from 'react';
import styles from './rating-bar.module.css';

interface RatingBarProps {
  rating: number;
  classes?: string;
}

const RatingBar = memo<RatingBarProps>(({ rating, classes = '' }) => {
  return (
    <div className={`${styles.rating__container} ${classes}`}>
      {new Array(Math.floor(rating)).fill(1).map((value, index) => (
        <span
          key={index}
          data-testid="card-rating-star"
          className={`material-symbols-outlined ${styles.rating__star}`}
        >
          stars
        </span>
      ))}
    </div>
  );
});

export default RatingBar;
