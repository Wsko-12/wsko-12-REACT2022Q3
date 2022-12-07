import InputWithMessage from 'components/form/InputWithMessage/InputWithMessage';
import React, { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from '../form-components.module.css';

interface ISelectInputProps {
  registration: UseFormRegisterReturn<string>;
  label: string;
  isValid: boolean;
  options: string[];
  placeholder?: string;
}

const SelectInput = memo<ISelectInputProps>(
  ({ registration, label, isValid, options, placeholder }) => {
    return (
      <InputWithMessage isValid={isValid} label={label}>
        <select className={styles.input} {...registration}>
          {placeholder && (
            <option value="" disabled={true} hidden={true}>
              {placeholder}
            </option>
          )}
          {options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </InputWithMessage>
    );
  }
);

export default SelectInput;
