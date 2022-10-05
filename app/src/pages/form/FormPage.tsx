import CardForm from 'pages/form/CardForm/CardForm';
import React from 'react';
import { Component } from 'react';
import styles from './form.module.css';

export default class FormPage extends Component {
  render() {
    return (
      <section className={styles['form-page__wrapper']}>
        <CardForm />
        <div className={styles['form-page__content']}></div>
      </section>
    );
  }
}
