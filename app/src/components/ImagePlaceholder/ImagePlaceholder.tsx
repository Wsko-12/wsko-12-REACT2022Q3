import React from 'react';
import styles from './image-placeholder.module.css';

export default function ImagePlaceholder() {
  return (
    <div className={styles['image-placeholder__container']}>
      <span className="material-symbols-outlined">account_box</span>
    </div>
  );
}
