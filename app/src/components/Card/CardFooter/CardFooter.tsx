import React from 'react';

interface ICardFooterProps {
  rating: number;
}
export default function CardFooter({ rating }: ICardFooterProps) {
  return (
    <div className="card__footer">
      <div className="card__rating-container">
        {new Array(Math.floor(rating)).fill(1).map((value, index) => (
          <span key={index} className="material-symbols-outlined card__rating">
            stars
          </span>
        ))}
      </div>
    </div>
  );
}
