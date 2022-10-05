import React from 'react';
import styles from '../form-components.module.css';

interface ICheckboxInputProps {
  label?: string;
  checked?: boolean;
}

export default function CheckboxInput({ label = '', checked }: ICheckboxInputProps) {
  return (
    <label className={styles.form__label_checkbox}>
      <input type="checkbox" defaultChecked={checked} />
      {label}
    </label>
  );
}
