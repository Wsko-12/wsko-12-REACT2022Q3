import InputWithMessage from 'components/form/InputWithMessage/InputWithMessage';
import React, { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from '../form-components.module.css';

interface IRadioSwitcherProps {
  registration: UseFormRegisterReturn<string>;
  values: string[];
  isValid: boolean;
  label: string;
}

const RadioSwitcher = memo<IRadioSwitcherProps>(({ registration, values, isValid, label }) => {
  return (
    <InputWithMessage isValid={isValid} label={label}>
      {values.map((value) => {
        return (
          <label className={styles.label_checkbox} key={value}>
            <input type="radio" {...registration} value={value}></input>
            {value}
          </label>
        );
      })}
    </InputWithMessage>
  );
});

export default RadioSwitcher;
