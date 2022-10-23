import React, { memo } from 'react';
import { UseFormRegister, FormState } from 'react-hook-form';
import { ICardFormValues } from '../CardForm';
import CheckboxInput from '../components/CheckboxInput/CheckboxInput';
import RadioSwitcher from '../components/RadioSwitcher/RadioSwitcher';

interface IPermissionsInfoProps {
  register: UseFormRegister<ICardFormValues>;
  formState: FormState<ICardFormValues>;
}

const PermissionsInfo = memo<IPermissionsInfoProps>(({ register, formState }) => {
  const { errors } = formState;

  return (
    <div>
      <RadioSwitcher
        registration={register('notifications', { required: true })}
        values={[
          'I want to receive notifications about promo, sales, etc.',
          "I don't want to receive notifications about promo, sales, etc.",
        ]}
        isValid={!errors.notifications}
        label="notifications"
      />

      <CheckboxInput
        label="Install Amigo and Yandex browser"
        registration={register('installBrowsers')}
      />

      <CheckboxInput label="I consent to my personal data" registration={register('consent')} />
    </div>
  );
});

export default PermissionsInfo;
