import React, { memo, useRef, useState } from 'react';
import styles from './card-form.module.css';
import User from './User/User';
import Delivery from './Delivery/Delivery';
import Personal from './PersonalData/PersonalData';
import { ECardFormFields } from '../FormPage';
import { isUserCardData } from 'ts/typeguards';
import { IUserCardData } from 'ts/interfaces';

export type onChangeCarried = (name: ECardFormFields) => (e: React.SyntheticEvent) => void;

function parseUserCardFormData(formData: FormData) {
  const data = {
    id: Date.now().toString(),
    avatar: formData.get(ECardFormFields.avatar) as File,
    name: formData.get(ECardFormFields.name),
    surname: formData.get(ECardFormFields.surname),
    gender: formData.get(ECardFormFields.gender),
    country: formData.get(ECardFormFields.country),
    email: formData.get(ECardFormFields.email),
    birthday: formData.get(ECardFormFields.birthday),
    delivery: formData.get(ECardFormFields.delivery),
    zip: formData.get(ECardFormFields.zip),
    installBrowsers: formData.get(ECardFormFields.installBrowsers) === 'on',
    notifications: formData.get(ECardFormFields.notifications) === 'on',
    consent: formData.get(ECardFormFields.consentForPersonalData) === 'on',
  };

  return data;
}

interface ICardFormProps {
  createCard?: (data: IUserCardData) => void;
}

const CardForm = memo<ICardFormProps>(({ createCard }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isValid, setIsValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // use this carry function in case if I need to do custom validation.
  // I will know which field needs to be checked now
  const handleChangeCarry: onChangeCarried = (/* name */) => (/* e */) => {
    // to enable the submit button in first typing
    if (!isSubmitted) {
      setIsValid(true);
    } else {
      const isFormValid = formRef.current?.checkValidity();
      setIsValid(!!isFormValid);
    }
  };

  // I'm using this two handlers because I use default validations on form fields
  // in case when form isn't valid submit event isn't calls
  // calls only click event on button
  function handleSubmitClick() {
    setIsSubmitted(true);
    const isFormValid = formRef.current?.checkValidity();
    setIsValid(!!isFormValid);
  }

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = parseUserCardFormData(formData);

    if (isUserCardData(data) && createCard) {
      createCard(data);
      resetForm();
    }
  }

  function resetForm() {
    formRef.current?.reset();
    setIsValid(false);
    setIsSubmitted(false);
  }

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__body}>
        <div>
          <User onChange={handleChangeCarry} />
        </div>
        <div>
          <Delivery onChange={handleChangeCarry} />
          <Personal onChange={handleChangeCarry} />
        </div>
      </div>
      <div className={styles.form__footer}>
        <button
          className={styles.form__button}
          type="submit"
          disabled={!isValid}
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </div>
    </form>
  );
});

export default CardForm;
