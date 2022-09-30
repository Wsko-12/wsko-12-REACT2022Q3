import React from 'react';
import styles from './loader.module.css';
export default function Loader() {
  return (
    <div data-testid="loader" className={styles.loader__container}>
      <div className={styles.loader__item}></div>
    </div>
  );
}
