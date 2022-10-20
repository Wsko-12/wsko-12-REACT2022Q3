import React, { memo, useState } from 'react';
import styles from '../form-components.module.css';
import InputWithMessage from '../InputWithMessage/InputWithMessage';

interface IFormInputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  pattern?: string;
  type?: React.HTMLInputTypeAttribute;
  title?: string;
  required?: boolean;
  onChange?: (e: React.SyntheticEvent) => void;
  errorMessage?: string;
}

const FormInput = memo<IFormInputProps>(
  ({ label, pattern, type, title, required, errorMessage, name, placeholder, onChange }) => {
    const [isValid, setIsValid] = useState(true);

    function handleChange(e: React.SyntheticEvent) {
      setIsValid(true);
      if (onChange) {
        onChange(e);
      }
    }

    return (
      <InputWithMessage isValid={isValid} label={label} message={errorMessage}>
        <input
          name={name}
          title={title}
          pattern={pattern}
          className={styles.form__input}
          type={type || 'text'}
          required={required}
          placeholder={placeholder || label}
          onChange={handleChange}
          onInvalid={() => setIsValid(false)}
        ></input>
      </InputWithMessage>
    );
  }
);

export default FormInput;
