import React, { memo } from 'react';
import { IProduct } from 'ts/interfaces';
import styles from './card.module.css';
import CardBody from './CardBody/CardBody';
import CardFooter from './CardFooter/CardFooter';
import CardHeader from './CardHeader/CardHeader';

interface ICardProps {
  data: IProduct;
}

const ProductCard = memo<ICardProps>(({ data }) => {
  const { image, model, brand, weight, year, camera, sizes, battery, rating } = data;
  return (
    <div className={styles.card}>
      <div className={styles.card__image_container}>
        <img src={image} alt={`${brand} ${model}`} className={styles.card__image} />
      </div>
      <div className={styles.card__content}>
        <CardHeader brand={brand} model={model} />
        <CardBody year={year} weight={weight} camera={camera} sizes={sizes} battery={battery} />
        <CardFooter rating={rating} />
      </div>
    </div>
  );
});
export default ProductCard;
