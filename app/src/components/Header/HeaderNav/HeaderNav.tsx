import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header-nav.module.css';

export default class HeaderNav extends Component {
  render() {
    return (
      <nav className={styles['header-nav']}>
        <NavLink end to="/" className={`${styles['header-nav__link']} ${styles.link}`}>
          Main
        </NavLink>
        <NavLink to="/about" className={`${styles['header-nav__link']} ${styles.link}`}>
          About us
        </NavLink>
        <NavLink to="/form" className={`${styles['header-nav__link']} ${styles.link}`}>
          Form
        </NavLink>
      </nav>
    );
  }
}
