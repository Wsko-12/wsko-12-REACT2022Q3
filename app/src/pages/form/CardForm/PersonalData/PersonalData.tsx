import CheckboxInput from 'components/form/CheckboxInput/CheckboxInput';
import RadioSwitcher from 'components/form/RadioSwitcher/RadioSwitcher';
import { CardFormFields } from 'pages/form/FormPage';
import React from 'react';
import { TOnChangeCarried } from '../CardForm';
interface IPersonalDataFormProps {
  onChange: TOnChangeCarried;
}
export default function PersonalData({ onChange }: IPersonalDataFormProps) {
  return (
    <>
      <CheckboxInput
        label="I consent to my personal data"
        name={CardFormFields.consentForPersonalData}
      />
      <CheckboxInput
        label="Install Amigo and Yandex browser"
        name={CardFormFields.installBrowsers}
        checked={true}
      />
      <RadioSwitcher
        onChange={onChange(CardFormFields.notifications)}
        label="Notifications"
        values={[
          ['on', 'I want to receive notifications about promo, sales, etc.'],
          ['off', "I don't want to receive notifications about promo, sales, etc."],
        ]} // ref property - extract
        name={CardFormFields.notifications}
      />
    </>
  );
}
