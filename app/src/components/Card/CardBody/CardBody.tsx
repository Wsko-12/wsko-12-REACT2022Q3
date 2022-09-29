import React from 'react';
import CardInfoRow from './CardInfoRow/CardInfoRow';

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
      <CardInfoRow icon="weight" value={`${weight}g`} />
      <CardInfoRow icon="straighten" value={`${sizes[0]}x${sizes[1]}x${sizes[2]}mm`} />
      <CardInfoRow icon="celebration" value={year} />
      {camera && <CardInfoRow icon="photo_camera" value={`${camera}Mp`} />}
      <CardInfoRow icon="battery_0_bar" value={`${battery}mAh`} />
    </div>
  );
}
