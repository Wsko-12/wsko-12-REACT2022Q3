import React, { memo, useRef, useState } from 'react';
import styles from './card-form.module.css';
import User from './User/User';
import Delivery from './Delivery/Delivery';
import Personal from './PersonalData/PersonalData';
import { CardFormFields } from '../FormPage';
import { isUserCardData } from 'ts/typeguards';
import { IUserCardData } from 'ts/interfaces';

// types From big letter, better with prefix T/I/E
export type TOnChangeCarried = (name: CardFormFields) => (e: React.SyntheticEvent) => void;

function parseUserCardFormData(formData: FormData) {
  return {
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
  // useCallback, now no sense in carry
  const handleChangeCarry: TOnChangeCarried = (/* name */) => (/* e */) => {
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
  // useCallback
  function handleSubmitClick() {
    setIsSubmitted(true);
    const isFormValid = formRef.current?.checkValidity();
    setIsValid(!!isFormValid);
  }

  // useCallback
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
