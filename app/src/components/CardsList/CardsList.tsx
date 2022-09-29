import Card from 'components/Card/Card';
import React from 'react';
import { IProduct } from 'ts/interfaces';
import './cards-list.css';

interface ClassListProps {
  products: IProduct[];
}

export default function ClassList({ products }: ClassListProps) {
  return (
    <div className="cards-list">
      {products.length > 0 ? (
        products.map((data) => <Card key={data.id} data={data} />)
      ) : (
        <div>Nothing found :(</div>
      )}
    </div>
  );
}
