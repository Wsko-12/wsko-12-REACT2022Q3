import CheckboxInput from 'components/form/CheckboxInput/CheckboxInput';
import RadioSwitcher from 'components/form/RadioSwitcher/RadioSwitcher';
import React from 'react';

export default function PersonalData() {
  return (
    <>
      <CheckboxInput label="I consent to my personal data" />
      <CheckboxInput label="Install Amigo and Yandex browser" checked={true} />
      <RadioSwitcher
        label="Notifications"
        values={[
          'I want to receive notifications about promo, sales, etc.',
          "I don't want to receive notifications about promo, sales, etc.",
        ]}
        name="notifications"
      />
    </>
  );
}
