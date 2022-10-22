import { useDefaultValidation } from 'hooks/customHooks';
import React, { memo } from 'react';
import styles from '../form-components.module.css';
import InputWithMessage from '../InputWithMessage/InputWithMessage';

interface IFormInputProps {
  name?: string;
  label?: string;
  placeholder?: string;
  pattern?: string | RegExp;
  type?: React.HTMLInputTypeAttribute;
  title?: string;
  required?: boolean;
  onChange?: (e: React.SyntheticEvent) => void;
  errorMessage?: string;
}

const FormInput = memo<IFormInputProps>(
  ({ label, pattern, type, title, required, errorMessage, name, placeholder, onChange }) => {
    const validation = useDefaultValidation(onChange);

    return (
      <InputWithMessage isValid={validation.isValid} label={label} message={errorMessage}>
        <input
          name={name}
          title={title}
          pattern={pattern instanceof RegExp ? pattern.toString() : pattern}
          className={styles.input}
          type={type || 'text'}
          required={required}
          placeholder={placeholder || label}
          {...validation.bind}
        ></input>
      </InputWithMessage>
    );
  }
);

export default FormInput;
