import React, { Component, createRef } from 'react';
import styles from './card-form.module.css';
import User from './User/User';
import Delivery from './Delivery/Delivery';
import Personal from './PersonalData/PersonalData';
import { CardFormFields } from '../FormPage';

export type onChangeCarried = (name: CardFormFields) => (e: React.SyntheticEvent) => void;

export default class CardForm extends Component {
  formRef = createRef<HTMLFormElement>();
  state = {
    isFormValid: false,
    isSubmitted: false,
  };

  // use this carry function in case if I need to do custom validation.
  // I will know which field needs to be checked now
  handleChangeCarry: onChangeCarried = (/* name */) => (/* e */) => {
    const { isSubmitted } = this.state;
    this.setState({ isFormValid: true });
    if (isSubmitted) {
      const isFormValid = this.formRef.current?.checkValidity();
      this.setState({ isFormValid });
    }
  };

  handleSubmitClick = () => {
    this.setState({ isSubmitted: true });
    const isFormValid = this.formRef.current?.checkValidity();
    this.setState({ isFormValid });
  };

  handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // console.log(Object.fromEntries(formData));
  };

  render() {
    const { isFormValid } = this.state;
    return (
      <form ref={this.formRef} className={styles.form} onSubmit={this.handleSubmit}>
        <div className={styles.form__body}>
          <div>
            <User onChange={this.handleChangeCarry} />
          </div>
          <div>
            <Delivery onChange={this.handleChangeCarry} />
            <Personal onChange={this.handleChangeCarry} />
          </div>
        </div>
        <div className={styles.form__footer}>
          <button
            className={styles.form__button}
            type="submit"
            disabled={!isFormValid}
            onClick={this.handleSubmitClick}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
