import React from 'react';
import styles from '../form.module.css';

interface IFormInputProps {
  label?: string;
  placeholder?: string;
  pattern?: string;
  type?: React.HTMLInputTypeAttribute;
  title?: string;
}

export default function FormInput({
  type = 'text',
  label = '',
  placeholder,
  pattern,
  title,
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
        placeholder={placeholder}
      ></input>
    </label>
  );
}
