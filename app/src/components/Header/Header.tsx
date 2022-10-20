import HeaderNav from 'components/Header/HeaderNav/HeaderNav';
import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(() => {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <HeaderNav />
      </div>
    </div>
  );
});

export default Header;
