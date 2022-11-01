import React, { memo, SyntheticEvent, useCallback, useContext } from 'react';
import { UseFormRegister, FormState } from 'react-hook-form';
import { setFormValueAction } from 'store/reducers/form/formReducer';
import { StoreContext } from 'store/Store';
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
  const [store, dispatch] = useContext(StoreContext);

  const onDeliveryChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    dispatch(setFormValueAction('delivery', e.currentTarget.value));
  }, []);

  const onZipChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    dispatch(setFormValueAction('zip', e.currentTarget.value));
  }, []);

  const onCountryChange = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    dispatch(setFormValueAction('country', e.currentTarget.value));
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
          onChange: onDeliveryChange,
        })}
        min={today}
      />

      <TextInput
        label="Zip-code"
        isValid={!errors.zip}
        registration={register('zip', {
          required: true,
          pattern: new RegExp(zipCodeReg),
          onChange: onZipChange,
        })}
      />

      <SelectInput
        registration={register('country', {
          required: true,
          value: '',
          onChange: onCountryChange,
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
