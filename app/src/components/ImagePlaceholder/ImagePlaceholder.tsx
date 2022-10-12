import Icon from 'components/Icon/Icon';
import React, { memo } from 'react';
import styles from './image-placeholder.module.css';

const ImagePlaceholder = memo(() => {
  return (
    <div className={styles['image-placeholder__container']}>
      <Icon name="account_box" />
    </div>
  );
});

export default ImagePlaceholder;
