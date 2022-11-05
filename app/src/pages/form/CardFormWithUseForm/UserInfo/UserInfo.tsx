import React, { memo, SyntheticEvent, useCallback } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';
import { useAppDispatch } from 'store-redux/hooks';
import { isFormFieldWithString, setStringValue } from 'store-redux/slices/formSlice';
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
const genders = ['male', 'female'];

const UserInfo = memo<IUserInfoProps>(({ register, formState, today }) => {
  const { errors } = formState;
  const dispatch = useAppDispatch();

  const onChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    const { name: field, value } = e.currentTarget;
    if (isFormFieldWithString(field)) {
      dispatch(setStringValue({ field, value }));
    }
  }, []);

  return (
    <div>
      <TextInput
        label="name"
        isValid={!errors.name}
        registration={register('name', {
          required: true,
          pattern: new RegExp(nameReg),
          onChange: onChange,
        })}
      />

      <TextInput
        label="surname"
        isValid={!errors.surname}
        registration={register('surname', {
          required: true,
          pattern: new RegExp(nameReg),
          onChange: onChange,
        })}
      />

      <TextInput
        label="email"
        isValid={!errors.email}
        registration={register('email', {
          required: true,
          pattern: new RegExp(emailReg),
          onChange: onChange,
        })}
      />

      <DatePicker
        isValid={!errors.birthday}
        label="Birthday"
        registration={register('birthday', {
          required: true,
          valueAsDate: true,
          max: today, // It's not working
          onChange: onChange,
        })}
        max={today}
      />

      <RadioSwitcher
        registration={register('gender', {
          required: true,
          onChange: onChange,
        })}
        values={genders}
        isValid={!errors.gender}
        label="gender"
      />

      <FileInput registration={register('avatar')} />
    </div>
  );
});

export default UserInfo;
