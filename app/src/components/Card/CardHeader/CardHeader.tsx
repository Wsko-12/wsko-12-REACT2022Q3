import React from 'react';

interface ICardHeaderProps {
  brand: string;
  model: string;
}
export default function CardHeader({ brand, model }: ICardHeaderProps) {
  return (
    <div className="card__header">
      <h3 className="card__title">{brand}</h3>
      <p className="card__subtitle">{model}</p>
    </div>
  );
}
