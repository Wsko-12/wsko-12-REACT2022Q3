import React, { Component } from 'react';
import styles from './form.module.css';
import FormInput from './FormInput/FormInput';
export default class MyForm extends Component {
  render() {
    return (
      <div className={styles.form__container}>
        <FormInput label="Name" />
      </div>
    );
  }
}
