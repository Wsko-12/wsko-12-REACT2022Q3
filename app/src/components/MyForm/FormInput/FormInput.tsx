import React from 'react';
import styles from '../form.module.css';

interface IFormInputProps {
  label?: string;
}

export default function FormInput({ label = '' }: IFormInputProps) {
  return (
    <label className={styles.form__label}>
      {label}
      <input className={styles.form__input} type="text" placeholder={label}></input>
    </label>
  );
}
