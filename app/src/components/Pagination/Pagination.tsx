import React, { memo } from 'react';
import { getPagesIndexes } from 'utils/utils';
import PaginationButton from './button/PaginationButton';
import styles from './pagination.module.css';

interface IPaginationProps {
  total: number;
  page: number;

  onClick?: (page: number) => void;
  buttonsCount?: number;
}

const Pagination = memo<IPaginationProps>(({ onClick, total, page, buttonsCount = 6 }) => {
  return (
    <nav className={styles.container}>
      {getPagesIndexes(buttonsCount, page, total).map((value) => (
        <PaginationButton key={value}>{value}</PaginationButton>
      ))}
    </nav>
  );
});

export default Pagination;
