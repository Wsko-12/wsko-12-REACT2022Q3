import React, { memo, SyntheticEvent, useCallback } from 'react';
import { UseFormRegister, FormState } from 'react-hook-form';
import { useAppDispatch } from 'store-redux/hooks';
import { setBooleanValue, setStringValue } from 'store-redux/slices/formSlice';
import { ICardFormValues } from '../CardForm';
import CheckboxInput from '../components/CheckboxInput/CheckboxInput';
import RadioSwitcher from '../components/RadioSwitcher/RadioSwitcher';

interface IPermissionsInfoProps {
  register: UseFormRegister<ICardFormValues>;
  formState: FormState<ICardFormValues>;
}

const PermissionsInfo = memo<IPermissionsInfoProps>(({ register, formState }) => {
  const { errors } = formState;
  const dispatch = useAppDispatch();

  const onChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    const field = e.currentTarget.name;

    switch (field) {
      case 'notifications':
        dispatch(setStringValue({ field, value: e.currentTarget.value }));
        break;
      case 'consent':
      case 'installBrowsers':
        dispatch(
          setBooleanValue({
            field,
            value: e.currentTarget.checked,
          })
        );
        break;
    }
  }, []);

  return (
    <div>
      <RadioSwitcher
        registration={register('notifications', {
          required: true,
          onChange: onChange,
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
          onChange: onChange,
        })}
      />

      <CheckboxInput
        label="I consent to my personal data"
        registration={register('consent', {
          onChange: onChange,
        })}
      />
    </div>
  );
});

export default PermissionsInfo;
