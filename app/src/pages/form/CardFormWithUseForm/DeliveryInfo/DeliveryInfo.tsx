import React, { memo, SyntheticEvent, useCallback } from 'react';
import { UseFormRegister, FormState } from 'react-hook-form';
import { useAppDispatch } from 'store-redux/hooks';
import { isFormFieldWithString, setStringValue } from 'store-redux/slices/formSlice';
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
  const dispatch = useAppDispatch();

  const onChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    const { name: field, value } = e.currentTarget;
    if (isFormFieldWithString(field)) {
      dispatch(setStringValue({ field, value }));
    }
  }, []);

  return (
    <div>
      <DatePicker
        isValid={!errors.delivery}
        label="Delivery"
        registration={register('delivery', {
          required: true,
          valueAsDate: true,
          min: today, // It's not working
          onChange: onChange,
        })}
        min={today}
      />

      <TextInput
        label="Zip-code"
        isValid={!errors.zip}
        registration={register('zip', {
          required: true,
          pattern: new RegExp(zipCodeReg),
          onChange: onChange,
        })}
      />

      <SelectInput
        registration={register('country', {
          required: true,
          value: '',
          onChange: onChange,
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
