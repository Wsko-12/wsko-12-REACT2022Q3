import React, { memo, SyntheticEvent } from 'react';
import { UseFormRegister, FormState } from 'react-hook-form';
import { ICardFormValues } from '../CardForm';
import CheckboxInput from '../components/CheckboxInput/CheckboxInput';
import RadioSwitcher from '../components/RadioSwitcher/RadioSwitcher';

interface IPermissionsInfoProps {
  register: UseFormRegister<ICardFormValues>;
  formState: FormState<ICardFormValues>;
  onFieldChange: <T extends keyof ICardFormValues>(field: T, value: ICardFormValues[T]) => void;
}

const PermissionsInfo = memo<IPermissionsInfoProps>(({ register, formState, onFieldChange }) => {
  const { errors } = formState;

  return (
    <div>
      <RadioSwitcher
        registration={register('notifications', {
          required: true,
          onChange: (e: SyntheticEvent<HTMLInputElement>) => {
            onFieldChange('notifications', e.currentTarget.value);
          },
        })}
        values={[
          'I want to receive notifications about promo, sales, etc.',
          "I don't want to receive notifications about promo, sales, etc.",
        ]}
        isValid={!errors.notifications}
        label="notifications"
      />

      <CheckboxInput
        label="Install Amigo and Yandex browser"
        registration={register('installBrowsers', {
          onChange: (e: SyntheticEvent<HTMLInputElement>) => {
            onFieldChange('installBrowsers', e.currentTarget.checked);
          },
        })}
      />

      <CheckboxInput
        label="I consent to my personal data"
        registration={register('consent', {
          onChange: (e: SyntheticEvent<HTMLInputElement>) => {
            onFieldChange('consent', e.currentTarget.checked);
          },
        })}
      />
    </div>
  );
});

export default PermissionsInfo;
