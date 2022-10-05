import React from 'react';
import styles from '../form-components.module.css';

interface IInputWithMessageProps {
  children: React.ReactNode;
  isValid: boolean;
  message?: string;
  label?: string;
}
export default function InputWithMessage(props: IInputWithMessageProps) {
  const { children, isValid, message = 'Invalid data', label = '' } = props;
  return (
    <div className={styles.form__item}>
      <label className={styles.form__label}>
        {label}
        {children}
      </label>
      {!isValid && <p className={styles.form__message}>{message}</p>}
    </div>
  );
}
