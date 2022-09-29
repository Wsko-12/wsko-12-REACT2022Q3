import RatingBar from 'components/RatingBar/RatingBar';
import React from 'react';

interface ICardFooterProps {
  rating: number;
}
export default function CardFooter({ rating }: ICardFooterProps) {
  return (
    <div className="card__footer">
      <RatingBar rating={rating} classes="card__rating-container" />
    </div>
  );
}
