import React from 'react';
import styles from '../form-components.module.css';

interface IRadioSwitcherProps {
  values: string[];
  name: string;
  label?: string;
}

export default function RadioSwitcher({ values, label, name }: IRadioSwitcherProps) {
  return (
    <>
      <label className={styles.form__label}>{label}</label>
      {values.map((value) => {
        return (
          <label key={value} className={styles.form__label_checkbox}>
            <input type="radio" name={name} />
            {value}
          </label>
        );
      })}
    </>
  );
}
