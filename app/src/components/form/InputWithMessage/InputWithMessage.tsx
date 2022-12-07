import React, { memo } from 'react';
import styles from '../form-components.module.css';

interface IInputWithMessageProps {
  children: React.ReactNode;
  isValid: boolean;
  message?: string;
  label?: string;
}
const InputWithMessage = memo<IInputWithMessageProps>(
  ({ children, isValid, message = 'Invalid data', label = '' }) => {
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
);
export default InputWithMessage;
