import React, { memo, useState } from 'react';
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
    const [isValid, setIsValid] = useState(true);

    function handleChange(e: React.SyntheticEvent) {
      setIsValid(true);
      if (onChange) {
        onChange(e);
      }
    }

    return (
      <InputWithMessage isValid={isValid} label={label} message={errorMessage}>
        <select
          className={styles.form__input}
          required={required}
          defaultValue=""
          onChange={handleChange}
          onInvalid={() => setIsValid(false)}
          name={name}
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
