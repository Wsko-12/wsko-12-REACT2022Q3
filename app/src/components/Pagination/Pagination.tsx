import SelectInput from 'components/form/SelectInput/SelectInput';
import React, { memo } from 'react';
import { getPagesIndexes } from 'utils/utils';
import PaginationButton from './button/PaginationButton';
import styles from './pagination.module.css';

interface IPaginationProps {
  total: number;
  page: number;
  limit: number;
  onChange?: (page: number) => void;
  onLimitChange?: (limit: string) => void;
  buttonsCount?: number;
}

const PrevButtons = memo<Pick<IPaginationProps, 'page' | 'onChange'>>(
  ({ page, onChange = () => {} }) => {
    if (page === 1) {
      return null;
    }
    return (
      <>
        <PaginationButton onClick={() => onChange(1)}>{'<<'}</PaginationButton>
        <PaginationButton onClick={() => onChange(page - 1)}>{'<'}</PaginationButton>
      </>
    );
  }
);

const NextButtons = memo<Pick<IPaginationProps, 'page' | 'onChange' | 'total'>>(
  ({ page, total, onChange = () => {} }) => {
    if (page === total) {
      return null;
    }
    return (
      <>
        <PaginationButton onClick={() => onChange(page + 1)}>{'>'}</PaginationButton>
        <PaginationButton onClick={() => onChange(total)}>{'>>'}</PaginationButton>
      </>
    );
  }
);

const InnerButtons = memo<Omit<IPaginationProps, 'limit'>>(
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

const Pagination = memo<IPaginationProps>(
  ({ onChange = () => {}, limit, total, page, buttonsCount, onLimitChange = () => {} }) => {
    return (
      <nav className={styles.container}>
        <PrevButtons page={page} onChange={onChange} />
        <InnerButtons buttonsCount={buttonsCount} page={page} total={total} onChange={onChange} />
        <NextButtons page={page} onChange={onChange} total={total} />
        <SelectInput
          onChange={(e) => onLimitChange(e.currentTarget.value)}
          options={['10', '20', '30', '40', '50']}
          defaultValue={limit.toString()}
        />
      </nav>
    );
  }
);

export default Pagination;
