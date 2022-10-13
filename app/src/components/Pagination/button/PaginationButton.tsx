import React, { memo } from 'react';
import styles from '../pagination.module.css';

interface IPaginationPattonProps {
  children: React.ReactNode;
  onClick: () => void;
  isSelected?: boolean;
}
const PaginationButton = memo<IPaginationPattonProps>(({ children, onClick, isSelected }) => {
  const classes = [styles.button];
  if (isSelected) {
    classes.push(styles.button_active);
  }
  return (
    <button className={classes.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
});

export default PaginationButton;
