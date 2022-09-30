import React from 'react';
import { Component } from 'react';
import styles from './about.module.css';

export default class About extends Component {
  render() {
    return (
      <section className={styles.about__wrapper}>
        <div className={styles.about__content}>
          <h2>About us</h2>
        </div>
      </section>
    );
  }
}
