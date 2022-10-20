import { useDefaultValidation } from 'hooks/customHooks';
import React, { memo } from 'react';
import styles from '../form-components.module.css';
import InputWithMessage from '../InputWithMessage/InputWithMessage';

interface ISelectInputProps {
  name?: string;
  placeholder?: string;
  label?: string;
  options: string[];
  required?: boolean;
  onChange?: (e: React.SyntheticEvent) => void;
  errorMessage?: string;
}

const SelectInput = memo<ISelectInputProps>(
  ({ label, required, placeholder, options, errorMessage, name, onChange }) => {
    const validation = useDefaultValidation(onChange);

    return (
      <InputWithMessage isValid={validation.isValid} label={label} message={errorMessage}>
        <select
          className={styles.form__input}
          required={required}
          defaultValue=""
          name={name}
          {...validation.bind}
        >
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
