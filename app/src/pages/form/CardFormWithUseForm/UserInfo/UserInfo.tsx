import React, { memo } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';
import { emailReg, nameReg } from 'utils/regex/regex';
import { ICardFormValues } from '../CardForm';
import DatePicker from '../components/DatePicker/DatePicker';
import FileInput from '../components/FileInput/FileInput';
import RadioSwitcher from '../components/RadioSwitcher/RadioSwitcher';
import TextInput from '../components/TextInput/TextInput';
interface IUserInfoProps {
  register: UseFormRegister<ICardFormValues>;
  formState: FormState<ICardFormValues>;
  today: string;
}
const UserInfo = memo<IUserInfoProps>(({ register, formState, today }) => {
  const { errors } = formState;

  return (
    <>
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
    </>
  );
});

export default UserInfo;
