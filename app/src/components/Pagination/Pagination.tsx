import React, { memo } from 'react';
import { getPagesIndexes } from 'utils/utils';
import PaginationButton from './button/PaginationButton';
import styles from './pagination.module.css';

interface IPaginationProps {
  total: number;
  page: number;
  onChange?: (page: number) => void;
  buttonsCount?: number;
}
// ?? should I use event delegation

const PrevButtons = memo<Pick<IPaginationProps, 'page' | 'onChange'>>(
  ({ page, onChange = () => {} }) => {
    return (
      <>
        {page !== 1 && (
          <>
            <PaginationButton onClick={() => onChange(1)}>{'<<'}</PaginationButton>
            <PaginationButton onClick={() => onChange(page - 1)}>{'<'}</PaginationButton>
          </>
        )}
      </>
    );
  }
);

const NextButtons = memo<Pick<IPaginationProps, 'page' | 'onChange' | 'total'>>(
  ({ page, total, onChange = () => {} }) => {
    return (
      <>
        {page !== total && (
          <>
            <PaginationButton onClick={() => onChange(page + 1)}>{'>'}</PaginationButton>
            <PaginationButton onClick={() => onChange(total)}>{'>>'}</PaginationButton>
          </>
        )}
      </>
    );
  }
);

const InnerButtons = memo<IPaginationProps>(
  ({ buttonsCount = 5, page, total, onChange = () => {} }) => {
    return (
      <>
        {getPagesIndexes(buttonsCount, page, total).map((value) => (
          <PaginationButton key={value} onClick={() => onChange(value)} isSelected={page === value}>
            {value}
          </PaginationButton>
        ))}
      </>
    );
  }
);

const Pagination = memo<IPaginationProps>(({ onChange = () => {}, total, page, buttonsCount }) => {
  return (
    <nav className={styles.container}>
      <PrevButtons page={page} onChange={onChange} />
      <InnerButtons buttonsCount={buttonsCount} page={page} total={total} onChange={onChange} />
      <NextButtons page={page} onChange={onChange} total={total} />
    </nav>
  );
});

export default Pagination;
