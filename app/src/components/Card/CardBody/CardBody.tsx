import React from 'react';

interface ICardBodyProps {
  weight: number;
  year: number;
  camera: number | null;
  sizes: [number, number, number];
  battery: number;
}

export default function CardBody({ weight, year, camera, sizes, battery }: ICardBodyProps) {
  return (
    <div className="card__body">
      <div className="card__info">
        <span className="material-symbols-outlined">weight</span>
        <span>{weight}</span>
      </div>
      <div className="card__info">
        <span className="material-symbols-outlined">straighten</span>
        <span>
          {sizes[0]}x{sizes[1]}x{sizes[2]}mm
        </span>
      </div>
      <div className="card__info">
        <span className="material-symbols-outlined">celebration</span>
        <span>{year}</span>
      </div>
      {camera && (
        <div data-testid="card-camera-info" className="card__info">
          <span className="material-symbols-outlined">photo_camera</span>
          <span>{camera}Mp</span>
        </div>
      )}
      <div className="card__info">
        <span className="material-symbols-outlined">battery_0_bar</span>
        <span>{battery}mAh</span>
      </div>
    </div>
  );
}
