import React, { Component } from 'react';
import { IProduct } from 'ts/interfaces';
import './card.css';
import CardBody from './CardBody/CardBody';
import CardHeader from './CardHeader/CardHeader';

interface ICardProps {
  data: IProduct;
}

export default class Card extends Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }

  render() {
    const { image, model, brand, weight, year } = this.props.data;
    return (
      <div className="card">
        <div className="card__image_container">
          <img src={image} alt={model} className="card__image" />
        </div>
        <div className="card__content">
          <CardHeader brand={brand} model={model} />
          <CardBody year={year} weight={weight} />
        </div>
      </div>
    );
  }
}
