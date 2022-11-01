import React, { memo, SyntheticEvent, useContext } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';
import { setFormValueAction } from 'store/reducers/form/formReducer';
import { StoreContext } from 'store/Store';
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
  const [store, dispatch] = useContext(StoreContext);

  return (
    <div>
      <TextInput
        label="name"
        isValid={!errors.name}
        registration={register('name', {
          required: true,
          pattern: new RegExp(nameReg),
          onChange: (e: SyntheticEvent<HTMLInputElement>) => {
            dispatch(setFormValueAction('name', e.currentTarget.value));
          },
        })}
      />

      <TextInput
        label="surname"
        isValid={!errors.surname}
        registration={register('surname', {
          required: true,
          pattern: new RegExp(nameReg),
          onChange: (e: SyntheticEvent<HTMLInputElement>) => {
            dispatch(setFormValueAction('surname', e.currentTarget.value));
          },
        })}
      />

      <TextInput
        label="email"
        isValid={!errors.email}
        registration={register('email', {
          required: true,
          pattern: new RegExp(emailReg),
          onChange: (e: SyntheticEvent<HTMLInputElement>) => {
            dispatch(setFormValueAction('email', e.currentTarget.value));
          },
        })}
      />

      <DatePicker
        isValid={!errors.birthday}
        label="Birthday"
        registration={register('birthday', {
          required: true,
          valueAsDate: true,
          max: today, // It's not working
          onChange: (e: SyntheticEvent<HTMLInputElement>) => {
            dispatch(setFormValueAction('birthday', e.currentTarget.value));
          },
        })}
        max={today}
      />

      <RadioSwitcher
        registration={register('gender', {
          required: true,
          onChange: (e: SyntheticEvent<HTMLInputElement>) => {
            dispatch(setFormValueAction('gender', e.currentTarget.value as 'male' | 'female'));
          },
        })}
        values={['male', 'female']}
        isValid={!errors.gender}
        label="gender"
      />

      <FileInput registration={register('avatar')} />
    </div>
  );
});

export default UserInfo;
