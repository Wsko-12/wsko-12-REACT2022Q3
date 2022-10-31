import DatePicker from 'components/form/DatePicker/DatePicker';
import FormInput from 'components/form/FormInput/FormInput';
import SelectInput from 'components/form/SelectInput/SelectInput';
import { CardFormFields } from 'pages/form/FormPage';
import React from 'react';
import { zipCodeReg } from 'utils/regex/regex';
import { TOnChangeCarried } from '../CardForm';

interface IDeliveryFormProps {
  onChange: TOnChangeCarried;
}

export default function Delivery({ onChange }: IDeliveryFormProps) {
  return (
    <>
      <FormInput
        name={CardFormFields.zip}
        label="zip-code"
        placeholder="000-000"
        pattern={zipCodeReg}
        required={true}
        onChange={onChange(CardFormFields.zip)}
        title="Only numbers or number with dash (example: 000 or 000-000)"
        errorMessage="Invalid zip-code"
      />

      <DatePicker
        label="delivery date"
        direction="future"
        name={CardFormFields.delivery}
        onChange={onChange(CardFormFields.delivery)}
      />

      <SelectInput
        label="country"
        required={true}
        placeholder="Select country"
        options={['Belarus', 'Ukraine', 'Georgia', 'Poland', 'Lithuania', 'Latvia']} // const ref property - extract from component
        onChange={onChange(CardFormFields.country)}
        errorMessage="Please, select your country"
        name={CardFormFields.country}
      />
    </>
  );
}
