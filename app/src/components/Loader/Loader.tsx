import React, { memo } from 'react';
import styles from './loader.module.css';

const Loader = memo(() => {
  return (
    <div data-testid="loader" className={styles.container}>
      <div className={styles.item}></div>
    </div>
  );
});

export default Loader;
