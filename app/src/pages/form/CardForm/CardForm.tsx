import React, { Component, createRef } from 'react';
// if you use module.css there are no reason to use BEM, hash should be added in build
import styles from './card-form.module.css';
import User from './User/User';
import Delivery from './Delivery/Delivery';
import Personal from './PersonalData/PersonalData';
import { CardFormFields } from '../FormPage';
import { isUserCardData } from 'ts/typeguards';
import { IUserCardData } from 'ts/interfaces';

export type onChangeCarried = (name: CardFormFields) => (e: React.SyntheticEvent) => void;

interface ICardFormProps {
  createCard?: (data: IUserCardData) => void;
}
export default class CardForm extends Component<ICardFormProps> {
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

  // clear after successfully submit
  handleSubmitClick = () => {
    this.setState({ isSubmitted: true });
    const isFormValid = this.formRef.current?.checkValidity();
    this.setState({ isFormValid });
  };

  // why 2 submit handlers ?? do it in 1
  handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      id: Date.now().toString(),
      avatar: formData.get(CardFormFields.avatar) as File,
      name: formData.get(CardFormFields.name),
      surname: formData.get(CardFormFields.surname),
      gender: formData.get(CardFormFields.gender),
      country: formData.get(CardFormFields.country),
      email: formData.get(CardFormFields.email),
      birthday: formData.get(CardFormFields.birthday),
      delivery: formData.get(CardFormFields.delivery),
      zip: formData.get(CardFormFields.zip),
      installBrowsers: formData.get(CardFormFields.installBrowsers) === 'on',
      notifications: formData.get(CardFormFields.notifications) === 'on',
      consent: formData.get(CardFormFields.consentForPersonalData) === 'on',
    };

    if (isUserCardData(data) && this.props.createCard) {
      this.props.createCard(data);
    }
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
