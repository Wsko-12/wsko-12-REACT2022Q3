import React, { memo, SyntheticEvent } from 'react';
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
  onFieldChange: <T extends keyof ICardFormValues>(field: T, value: ICardFormValues[T]) => void;
}
const DeliveryInfo = memo<IDeliveryInfoProps>(({ register, formState, today, onFieldChange }) => {
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
          onChange: (e: SyntheticEvent<HTMLInputElement>) => {
            onFieldChange('delivery', e.currentTarget.value);
          },
        })}
        min={today}
      />

      <TextInput
        label="Zip-code"
        isValid={!errors.zip}
        registration={register('zip', {
          required: true,
          pattern: new RegExp(zipCodeReg),
          onChange: (e: SyntheticEvent<HTMLInputElement>) => {
            onFieldChange('zip', e.currentTarget.value);
          },
        })}
      />

      <SelectInput
        registration={register('country', {
          required: true,
          value: '',
          onChange: (e: SyntheticEvent<HTMLInputElement>) => {
            onFieldChange('country', e.currentTarget.value);
          },
        })}
        label="Country"
        options={['Belarus', 'Ukraine', 'Georgia', 'Poland', 'Lithuania', 'Latvia']}
        isValid={!errors.country}
        placeholder="Select country"
      />
    </div>
  );
});

export default DeliveryInfo;
