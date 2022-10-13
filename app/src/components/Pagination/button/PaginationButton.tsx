import React, { memo } from 'react';
import styles from '../pagination.module.css';

interface IPaginationPattonProps {
  children: React.ReactNode;
}
const PaginationButton = memo<IPaginationPattonProps>(({ children }) => (
  <button className={styles.button}>{children}</button>
));

export default PaginationButton;
