import DatePicker from 'components/form/DatePicker/DatePicker';
import FileInput from 'components/form/FileInput/FileInput';
import FormInput from 'components/form/FormInput/FormInput';
import RadioSwitcher from 'components/form/RadioSwitcher/RadioSwitcher';
import { CardFormFields } from 'pages/form/FormPage';
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
        name={CardFormFields.name}
        label="name"
        placeholder="James"
        pattern={nameReg}
        required={true}
        onChange={onChange(CardFormFields.name)}
        title="Name can only contain letters and must be longer than two characters and shorter than fifteen"
        errorMessage="Invalid name"
      />
      <FormInput
        name={CardFormFields.surname}
        label="surname"
        placeholder="Smith"
        pattern={nameReg}
        required={true}
        onChange={onChange(CardFormFields.surname)}
        title="Surname can only contain letters and must be longer than two characters and shorter than fifteen"
        errorMessage="Invalid surname"
      />

      <FormInput
        name={CardFormFields.email}
        label="email"
        placeholder="example@example.com"
        required={true}
        type={'email'}
        pattern={new RegExp(emailReg).toString()}
        onChange={onChange(CardFormFields.email)}
        title="example@example.com or example.example@example.com or .by/.ua/.ru"
        errorMessage="Invalid email"
      />

      <DatePicker
        label="birthday"
        direction="past"
        name={CardFormFields.birthday}
        onChange={onChange(CardFormFields.birthday)}
      />
      <RadioSwitcher
        label="gender"
        values={['Male', 'Female']}
        name={CardFormFields.gender}
        onChange={onChange(CardFormFields.gender)}
      />
      <FileInput label="Load avatar" name={CardFormFields.avatar} />
    </>
  );
}
