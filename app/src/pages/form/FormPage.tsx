import MyForm from 'components/MyForm/MyForm';
import React from 'react';
import { Component } from 'react';
import styles from './form.module.css';

export default class FormPage extends Component {
  render() {
    return (
      <section className={styles['form-page__wrapper']}>
        <MyForm />
        <div className={styles['form-page__content']}></div>
      </section>
    );
  }
}
