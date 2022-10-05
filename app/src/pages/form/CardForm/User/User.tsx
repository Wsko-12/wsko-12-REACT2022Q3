import DatePicker from 'components/form/DatePicker/DatePicker';
import FileInput from 'components/form/FileInput/FileInput';
import FormInput from 'components/form/FormInput/FormInput';
import RadioSwitcher from 'components/form/RadioSwitcher/RadioSwitcher';
import React from 'react';
import { nameReg, emailReg } from 'utils/regex/regex';
import { onChangeCarried } from '../CardForm';
interface IUserFormProps {
  onChange: onChangeCarried;
}

export default function User({ onChange }: IUserFormProps) {
  return (
    <>
      <FormInput
        label="name"
        placeholder="James"
        pattern={nameReg}
        required={true}
        onChange={onChange('name')}
        title="Name can only contain letters and must be longer than two characters and shorter than fifteen"
        errorMessage="Invalid name"
      />
      <FormInput
        label="surname"
        placeholder="Smith"
        pattern={nameReg}
        required={true}
        onChange={onChange('surname')}
        title="Surname can only contain letters and must be longer than two characters and shorter than fifteen"
        errorMessage="Invalid surname"
      />

      <FormInput
        label="email"
        placeholder="example@example.com"
        required={true}
        type={'email'}
        pattern={emailReg}
        onChange={onChange('email')}
        title="example@example.com or example.example@example.com or .by/.ua/.ru"
        errorMessage="Invalid email"
      />

      <DatePicker label="birthday" direction="past" />
      <RadioSwitcher label="gender" values={['Male', 'Female']} name="gender" />
      <FileInput label="Load avatar" />
    </>
  );
}
