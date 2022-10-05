import React from 'react';
import styles from '../form-components.module.css';

interface IRadioSwitcherProps {
  values: (string | [string, string])[];
  name: string;
  label?: string;
}

export default function RadioSwitcher({ values, label, name }: IRadioSwitcherProps) {
  return (
    <>
      <label className={styles.form__label}>{label}</label>
      {values.map((value) => {
        if (Array.isArray(value)) {
          const [val, text] = value;
          return (
            <label key={val} className={styles.form__label_checkbox}>
              <input type="radio" name={name} value={val} />
              {text}
            </label>
          );
        }

        return (
          <label key={value} className={styles.form__label_checkbox}>
            <input type="radio" name={name} value={value.toLowerCase()} />
            {value}
          </label>
        );
      })}
    </>
  );
}
