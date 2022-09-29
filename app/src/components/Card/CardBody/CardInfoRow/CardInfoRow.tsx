import React from 'react';

interface ICardInfoRowProps {
  icon: string;
  value: string | number;
}

export default function CardInfoRow({ icon, value }: ICardInfoRowProps) {
  return (
    <div className="card__info">
      <span className="material-symbols-outlined">{icon}</span>
      <span>{value}</span>
    </div>
  );
}
