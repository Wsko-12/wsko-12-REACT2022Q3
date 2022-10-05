import React from 'react';
import styles from '../form-components.module.css';

interface ICheckboxInputProps {
  label?: string;
  checked?: boolean;
  name?: string;
}

export default function CheckboxInput({ name, label = '', checked }: ICheckboxInputProps) {
  return (
    <label className={styles.form__label_checkbox}>
      <input type="checkbox" defaultChecked={checked} name={name} />
      {label}
    </label>
  );
}
