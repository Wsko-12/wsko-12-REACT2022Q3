import React, { memo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IUserCardData } from 'ts/interfaces';
import { emailReg, nameReg } from 'utils/regex/regex';
import TextInput from './components/TextInput/TextInput';
import styles from './card-form.module.css';
import DatePicker from './components/DatePicker/DatePicker';
import FileInput from './components/FileInput/FileInput';

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
}

const CardForm = memo<ICardFormProps>(() => {
  const today = new Date().toLocaleDateString('en-CA');

  const defaultValues: ICardFormValues = {
    name: '',
    surname: '',
    email: '',
    birthday: '',
    delivery: '',
  };

  const { handleSubmit, register, reset, formState } = useForm<ICardFormValues>({ defaultValues });
  const { errors, isDirty, isSubmitted, isValid, isSubmitSuccessful } = formState;
  const onSubmit = (data: ICardFormValues) => {
    //reset doesn't clear isSubmitted
    //so, I always have validation after submit
    const file = data.avatar && data.avatar[0];
    console.log(data, file);
  };

  useEffect(() => {
    reset();
  }, [isSubmitSuccessful]);

  const [buttonEnabled, setButtonEnabled] = useState(true);
  useEffect(() => {
    const value = isSubmitted ? isValid : isDirty;
    setButtonEnabled(value);
  }, [isSubmitted, isDirty, isValid]);

  // if i pass register like a cb,
  // after form reset i can't receive values
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
          max: today, // It's not working
        })}
        max={today}
      />

      <FileInput registration={register('avatar')} />

      <button disabled={!buttonEnabled} type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
});

export default CardForm;
