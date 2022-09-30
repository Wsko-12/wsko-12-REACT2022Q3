import React, { Component } from 'react';
import { nameReg, zipCodeReg } from 'utils/regex/regex';
import styles from './form.module.css';
import FormInput from './FormInput/FormInput';
export default class MyForm extends Component {
  render() {
    return (
      <form className={styles.form__container}>
        <FormInput
          label="Name"
          placeholder="James"
          pattern={nameReg}
          required={true}
          title="Name can only contain letters and must be longer than two characters and shorter than fifteen"
        />
        <FormInput
          label="Surname"
          placeholder="Smith"
          pattern={nameReg}
          required={true}
          title="Surname can only contain letters and must be longer than two characters and shorter than fifteen"
        />
        <FormInput
          label="Zip-code"
          placeholder="000-000"
          pattern={zipCodeReg}
          required={true}
          title="Only numbers or number with dash (example: 000 or 000-000)"
        />
      </form>
    );
  }
}
