import Card from 'components/Card/Card';
import React from 'react';
import { IProduct } from 'ts/interfaces';
import styles from './cards-list.module.css';

interface ClassListProps {
  products: IProduct[];
}

export default function ClassList({ products }: ClassListProps) {
  return (
    <div className={styles['cards-list']}>
      {products.length > 0 ? (
        products.map((data) => <Card key={data.id} data={data} />)
      ) : (
        <div>Nothing found :(</div>
      )}
    </div>
  );
}
