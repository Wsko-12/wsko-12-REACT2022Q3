import React from 'react';
import styles from '../../form.module.css';

interface ISelectInputProps {
  placeholder?: string;
  label?: string;
  options: string[];
  required?: boolean;
}

export default function SelectInput({
  placeholder,
  options,
  label = '',
  required,
}: ISelectInputProps) {
  return (
    <label className={styles.form__label}>
      {label}

      <select className={styles.form__input} required={required} defaultValue="">
        {placeholder && (
          <option value="" disabled={true} hidden={true}>
            {placeholder}
          </option>
        )}
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </label>
  );
}
