import InputWithMessage from 'components/form/InputWithMessage/InputWithMessage';
import React, { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from '../form-components.module.css';

interface IDatePickerProps {
  registration: UseFormRegisterReturn<string>;
  isValid: boolean;
  max?: string;
  min?: string;
  label?: string;
}

const DatePicker = memo<IDatePickerProps>(({ label, isValid, registration, max, min }) => {
  return (
    <InputWithMessage isValid={isValid} label={label}>
      <input type="date" className={styles.input} max={max} min={min} {...registration}></input>
    </InputWithMessage>
  );
});
export default DatePicker;
