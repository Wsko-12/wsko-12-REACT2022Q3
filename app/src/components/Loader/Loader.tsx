import React, { memo } from 'react';
import styles from './loader.module.css';

const Loader = memo(() => {
  return (
    <div data-testid="loader" className={styles.loader__container}>
      <div className={styles.loader__item}></div>
    </div>
  );
});

export default Loader;
