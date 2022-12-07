import HeaderNav from 'components/Header/HeaderNav/HeaderNav';
import React from 'react';
import styles from './header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <HeaderNav />
      </div>
    </div>
  );
}
