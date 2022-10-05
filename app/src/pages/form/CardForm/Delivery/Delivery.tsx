import DatePicker from 'components/form/DatePicker/DatePicker';
import FormInput from 'components/form/FormInput/FormInput';
import SelectInput from 'components/form/SelectInput/SelectInput';
import React from 'react';
import { zipCodeReg } from 'utils/regex/regex';

export default function Delivery() {
  return (
    <>
      <FormInput
        label="zip-code"
        placeholder="000-000"
        pattern={zipCodeReg}
        required={true}
        title="Only numbers or number with dash (example: 000 or 000-000)"
      />

      <DatePicker label="delivery" direction="future" />

      <SelectInput
        label="country"
        required={true}
        placeholder="Select country"
        options={['Belarus', 'Ukraine', 'Georgia', 'Poland', 'Lithuania', 'Latvia']}
      />
    </>
  );
}
