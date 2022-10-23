import React, { memo } from 'react';
import { UseFormRegister, FormState } from 'react-hook-form';
import { zipCodeReg } from 'utils/regex/regex';
import { ICardFormValues } from '../CardForm';
import DatePicker from '../components/DatePicker/DatePicker';
import SelectInput from '../components/SelectInput/SelectInput';
import TextInput from '../components/TextInput/TextInput';
interface IDeliveryInfoProps {
  register: UseFormRegister<ICardFormValues>;
  formState: FormState<ICardFormValues>;
  today: string;
}
const DeliveryInfo = memo<IDeliveryInfoProps>(({ register, formState, today }) => {
  const { errors } = formState;

  return (
    <div>
      <DatePicker
        isValid={!errors.delivery}
        label="Delivery"
        registration={register('delivery', {
          required: true,
          valueAsDate: true,
          min: today, // It's not working
        })}
        min={today}
      />

      <TextInput
        label="Zip-code"
        isValid={!errors.zip}
        registration={register('zip', { required: true, pattern: new RegExp(zipCodeReg) })}
      />

      <SelectInput
        registration={register('country', { required: true, value: '' })}
        label="Country"
        options={['Belarus', 'Ukraine', 'Georgia', 'Poland', 'Lithuania', 'Latvia']}
        isValid={!errors.country}
        placeholder="Select country"
      />
    </div>
  );
});

export default DeliveryInfo;
