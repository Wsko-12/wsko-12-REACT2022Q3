import React from 'react';
import './rating-bar.css';

interface RatingBarProps {
  rating: number;
  classes?: string;
}

export default function RatingBar({ rating, classes = '' }: RatingBarProps) {
  return (
    <div className={'rating__container ' + classes}>
      {new Array(Math.floor(rating)).fill(1).map((value, index) => (
        <span
          key={index}
          data-testid="card-rating-star"
          className="material-symbols-outlined rating__star"
        >
          stars
        </span>
      ))}
    </div>
  );
}
