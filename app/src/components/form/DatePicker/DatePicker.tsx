import React from 'react';
import styles from '../form-components.module.css';

interface IDatePickerProps {
  label?: string;
  direction?: 'future' | 'past';
}

export default function DatePicker({ direction, label = '' }: IDatePickerProps) {
  const today = new Date().toLocaleDateString('en-CA');
  const max = !direction ? '' : direction !== 'past' ? '' : today;
  const min = !direction ? '' : direction !== 'future' ? '' : today;
  return (
    <label className={styles.form__label}>
      {label}
      <input
        className={styles.form__input}
        type="date"
        role="datepicker"
        min={min}
        max={max}
        defaultValue={today}
      />
    </label>
  );
}
