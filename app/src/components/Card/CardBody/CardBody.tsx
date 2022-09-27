import React from 'react';

interface ICardBodyProps {
  weight: number;
  year: number;
}

export default function CardBody(props: ICardBodyProps) {
  const { weight, year } = props;
  return (
    <div className="card__body">
      <div className="card__info">
        <span className="material-symbols-outlined">weight</span>
        <span>{weight}</span>
      </div>
      <div className="card__info">
        <span className="material-symbols-outlined">celebration</span>
        <span>{year}</span>
      </div>
    </div>
  );
}
