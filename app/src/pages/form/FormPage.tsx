import React from 'react';
import { Component } from 'react';
import styles from './form.module.css';

export default class FormPage extends Component {
  render() {
    return (
      <section className={styles['form-page__wrapper']}>
        <div className={styles['form-page__content']}>
          <h2>Form Page</h2>
        </div>
      </section>
    );
  }
}
