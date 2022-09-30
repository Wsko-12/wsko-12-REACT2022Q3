import React from 'react';
import styles from './rating-bar.module.css';

interface RatingBarProps {
  rating: number;
  classes?: string;
}

export default function RatingBar({ rating, classes = '' }: RatingBarProps) {
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
}
