import InputWithMessage from 'components/form/InputWithMessage/InputWithMessage';
import React, { memo, useEffect } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from '../form-components.module.css';

interface ITextInputProps {
  registration: UseFormRegisterReturn<string>;
  isValid: boolean;
  placeholder?: string;
  label: string;
}

const TextInput = memo<ITextInputProps>(({ registration, isValid, label, placeholder }) => {
  return (
    <InputWithMessage isValid={isValid} label={label}>
      <input className={styles.input} placeholder={placeholder || label} {...registration} />
    </InputWithMessage>
  );
});

export default TextInput;
