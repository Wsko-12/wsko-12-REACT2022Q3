import React, { memo, SyntheticEvent, useCallback, useContext } from 'react';
import { UseFormRegister, FormState } from 'react-hook-form';
import { setFormValueAction } from 'store/reducers/form/formReducer';
import { StoreContext } from 'store/Store';
import { ICardFormValues } from '../CardForm';
import CheckboxInput from '../components/CheckboxInput/CheckboxInput';
import RadioSwitcher from '../components/RadioSwitcher/RadioSwitcher';

interface IPermissionsInfoProps {
  register: UseFormRegister<ICardFormValues>;
  formState: FormState<ICardFormValues>;
}

const PermissionsInfo = memo<IPermissionsInfoProps>(({ register, formState }) => {
  const { errors } = formState;
  const [store, dispatch] = useContext(StoreContext);

  const onNotificationChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    dispatch(setFormValueAction('notifications', e.currentTarget.value));
  }, []);

  const onInstallBrowsersChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    dispatch(setFormValueAction('installBrowsers', e.currentTarget.checked));
  }, []);

  const onConsentChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    dispatch(setFormValueAction('consent', e.currentTarget.checked));
  }, []);

  return (
    <div>
      <RadioSwitcher
        registration={register('notifications', {
          required: true,
          onChange: onNotificationChange,
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
          onChange: onInstallBrowsersChange,
        })}
      />

      <CheckboxInput
        label="I consent to my personal data"
        registration={register('consent', {
          onChange: onConsentChange,
        })}
      />
    </div>
  );
});

export default PermissionsInfo;
