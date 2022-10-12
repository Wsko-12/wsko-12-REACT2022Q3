import ProductCard from 'components/ProductCard/ProductCard';
import React, { memo } from 'react';
import { IProduct } from 'ts/interfaces';
import styles from './cards-list.module.css';

interface ClassListProps {
  products: IProduct[];
}

const ClassList = memo<ClassListProps>(({ products }) => {
  return (
    <div className={styles['cards-list']}>
      {products.length > 0 ? (
        products.map((data) => <ProductCard key={data.id} data={data} />)
      ) : (
        <div>Nothing found :(</div>
      )}
    </div>
  );
});

export default ClassList;
