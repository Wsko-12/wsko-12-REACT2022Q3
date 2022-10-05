import React from 'react';
import styles from '../../form.module.css';

interface IFormInputProps {
  label?: string;
  placeholder?: string;
  pattern?: string;
  type?: React.HTMLInputTypeAttribute;
  title?: string;
  required?: boolean;
}

export default function FormInput({
  type = 'text',
  label = '',
  placeholder,
  pattern,
  title,
  required,
}: IFormInputProps) {
  if (!placeholder) {
    placeholder = label;
  }
  return (
    <label className={styles.form__label}>
      {label}
      <input
        title={title}
        pattern={pattern}
        className={styles.form__input}
        type={type}
        required={required}
        placeholder={placeholder}
      ></input>
    </label>
  );
}
