import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header-nav.module.css';

type classNameProps = {
  isActive: boolean;
  isPending: boolean;
};

const getClassName = ({ isActive }: classNameProps) => (isActive ? styles.active : undefined);

const HeaderNav = memo(() => {
  {
    return (
      <nav className={styles['header-nav']}>
        <NavLink end to="/" className={getClassName}>
          Main
        </NavLink>
        <NavLink to="/about" className={getClassName}>
          About us
        </NavLink>
        <NavLink to="/form" className={getClassName}>
          Form
        </NavLink>
      </nav>
    );
  }
});

export default HeaderNav;
