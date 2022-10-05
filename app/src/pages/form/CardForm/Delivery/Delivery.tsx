import DatePicker from 'components/form/DatePicker/DatePicker';
import FormInput from 'components/form/FormInput/FormInput';
import SelectInput from 'components/form/SelectInput/SelectInput';
import React from 'react';
import { zipCodeReg } from 'utils/regex/regex';
import { onChangeCarried } from '../CardForm';

interface IDeliveryFormProps {
  onChange: onChangeCarried;
}

export default function Delivery({ onChange }: IDeliveryFormProps) {
  return (
    <>
      <FormInput
        name="zip"
        label="zip-code"
        placeholder="000-000"
        pattern={zipCodeReg}
        required={true}
        onChange={onChange('zip')}
        title="Only numbers or number with dash (example: 000 or 000-000)"
        errorMessage="Invalid zip-code"
      />

      <DatePicker label="delivery" direction="future" name="delivery" />

      <SelectInput
        label="country"
        required={true}
        placeholder="Select country"
        options={['Belarus', 'Ukraine', 'Georgia', 'Poland', 'Lithuania', 'Latvia']}
        onChange={onChange('country')}
        errorMessage="Please, select your country"
        name="country"
      />
    </>
  );
}
