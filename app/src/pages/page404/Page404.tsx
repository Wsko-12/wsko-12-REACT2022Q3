import React from 'react';
import { Component } from 'react';
import styles from './page-404.module.css';

export default class Page404 extends Component {
  render() {
    return (
      <section className={styles.p404__wrapper}>
        <div className={styles.p404__content}>
          <h2>404. Page not found</h2>
        </div>
      </section>
    );
  }
}
