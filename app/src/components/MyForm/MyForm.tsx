import React, { Component } from 'react';
import { nameReg } from 'utils/regex/regex';
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
          title="Only letters (min: 2, max: 15)"
        />
        <FormInput
          label="Surname"
          placeholder="Smith"
          pattern={nameReg}
          title="Only letters (min: 2, max: 15)"
        />
        <FormInput label="Zip-code" placeholder="111-111" />
        <button type="submit">Send</button>
      </form>
    );
  }
}
