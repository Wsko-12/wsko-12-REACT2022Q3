import React from 'react';
import styles from '../form.module.css';

interface IFormInputProps {
  label?: string;
  placeholder?: string;
  type?: React.HTMLInputTypeAttribute;
}

export default function FormInput({ type = 'text', label = '', placeholder }: IFormInputProps) {
  if (!placeholder) {
    placeholder = label;
  }
  return (
    <label className={styles.form__label}>
      {label}
      <input className={styles.form__input} type={type} placeholder={placeholder}></input>
    </label>
  );
}
