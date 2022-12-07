import DatePicker from 'components/form/DatePicker/DatePicker';
import FileInput from 'components/form/FileInput/FileInput';
import FormInput from 'components/form/FormInput/FormInput';
import RadioSwitcher from 'components/form/RadioSwitcher/RadioSwitcher';
import { ECardFormFields } from 'pages/form/FormPage';
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
        name={ECardFormFields.name}
        label="name"
        placeholder="James"
        pattern={nameReg}
        required={true}
        onChange={onChange(ECardFormFields.name)}
        title="Name can only contain letters and must be longer than two characters and shorter than fifteen"
        errorMessage="Invalid name"
      />
      <FormInput
        name={ECardFormFields.surname}
        label="surname"
        placeholder="Smith"
        pattern={nameReg}
        required={true}
        onChange={onChange(ECardFormFields.surname)}
        title="Surname can only contain letters and must be longer than two characters and shorter than fifteen"
        errorMessage="Invalid surname"
      />

      <FormInput
        name={ECardFormFields.email}
        label="email"
        placeholder="example@example.com"
        required={true}
        type={'email'}
        pattern={emailReg}
        onChange={onChange(ECardFormFields.email)}
        title="example@example.com or example.example@example.com or .by/.ua/.ru"
        errorMessage="Invalid email"
      />

      <DatePicker
        label="birthday"
        direction="past"
        name={ECardFormFields.birthday}
        onChange={onChange(ECardFormFields.birthday)}
      />
      <RadioSwitcher
        label="gender"
        values={['Male', 'Female']}
        name={ECardFormFields.gender}
        onChange={onChange(ECardFormFields.gender)}
      />
      <FileInput label="Load avatar" name={ECardFormFields.avatar} />
    </>
  );
}
