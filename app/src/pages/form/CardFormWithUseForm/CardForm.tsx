import React, { memo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IUserCardData } from 'ts/interfaces';
import { emailReg, nameReg, zipCodeReg } from 'utils/regex/regex';
import TextInput from './components/TextInput/TextInput';
import styles from './card-form.module.css';
import DatePicker from './components/DatePicker/DatePicker';
import FileInput from './components/FileInput/FileInput';
import RadioSwitcher from './components/RadioSwitcher/RadioSwitcher';
import CheckboxInput from './components/CheckboxInput/CheckboxInput';
import SelectInput from './components/SelectInput/SelectInput';

interface ICardFormProps {
  createCard?: (data: IUserCardData) => void;
}

export interface ICardFormValues {
  name: string;
  surname: string;
  email: string;
  birthday: string;
  delivery: string;
  avatar?: FileList;
  gender?: 'male' | 'female';

  country: string;
  zip: string;
  installBrowsers: boolean;
  notifications: string;
  consent: boolean;
}

const CardForm = memo<ICardFormProps>(() => {
  const today = new Date().toLocaleDateString('en-CA');

  const defaultValues = {
    name: '',
    surname: '',
    email: '',
    birthday: today,
    delivery: today,

    zip: '',
    installBrowsers: true,
    notifications: '',
    consent: true,
  };

  const { handleSubmit, register, reset, formState } = useForm<ICardFormValues>({ defaultValues });
  const { errors, isDirty, isValid, isSubmitSuccessful } = formState;
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const onSubmit = (data: ICardFormValues) => {
    const file = data.avatar && data.avatar[0];
    console.log(data, file);
  };

  useEffect(() => {
    reset();
    setIsSubmitClicked(false);
  }, [isSubmitSuccessful]);

  const [buttonEnabled, setButtonEnabled] = useState(true);
  useEffect(() => {
    const value = isSubmitClicked ? isValid : isDirty;
    setButtonEnabled(value);
  }, [isSubmitClicked, isDirty, isValid]);

  // if i pass register like a cb,
  // after form reset i can't receive values because, as I understand it, it cleans refs and so on
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        label="name"
        isValid={!errors.name}
        registration={register('name', { required: true, pattern: new RegExp(nameReg) })}
      />

      <TextInput
        label="surname"
        isValid={!errors.surname}
        registration={register('surname', { required: true, pattern: new RegExp(nameReg) })}
      />

      <TextInput
        label="email"
        isValid={!errors.email}
        registration={register('email', { required: true, pattern: new RegExp(emailReg) })}
      />

      <DatePicker
        isValid={!errors.birthday}
        label="Birthday"
        registration={register('birthday', {
          required: true,
          valueAsDate: true,
          max: today, // It's not working
        })}
        max={today}
      />

      <FileInput registration={register('avatar')} />

      <RadioSwitcher
        registration={register('gender', { required: true })}
        values={['male', 'female']}
        isValid={!errors.gender}
        label="gender"
      />

      <RadioSwitcher
        registration={register('notifications', { required: true })}
        values={[
          'I want to receive notifications about promo, sales, etc.',
          "I don't want to receive notifications about promo, sales, etc.",
        ]}
        isValid={!errors.consent}
        label="notifications"
      />

      <CheckboxInput
        label="Install Amigo and Yandex browser"
        registration={register('installBrowsers')}
      />

      <CheckboxInput label="I consent to my personal data" registration={register('consent')} />

      <DatePicker
        isValid={!errors.delivery}
        label="Delivery"
        registration={register('delivery', {
          required: true,
          valueAsDate: true,
          min: today, // It's not working
        })}
        min={today}
      />

      <TextInput
        label="Zip-code"
        isValid={!errors.zip}
        registration={register('zip', { required: true, pattern: new RegExp(zipCodeReg) })}
      />

      <SelectInput
        registration={register('country', { required: true, value: '' })}
        label="Country"
        options={['Belarus', 'Ukraine', 'Georgia', 'Poland', 'Lithuania', 'Latvia']}
        isValid={!errors.country}
        placeholder="Select country"
      />

      <button
        disabled={!buttonEnabled}
        type="submit"
        className={styles.button}
        onClick={() => setIsSubmitClicked(true)}
      >
        Submit
      </button>
    </form>
  );
});

export default CardForm;
