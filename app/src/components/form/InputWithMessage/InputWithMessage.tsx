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
      <div className={styles.item}>
        <label className={styles.label}>
          {label}
          {children}
        </label>
        {!isValid && <p className={styles.message}>{message}</p>}
      </div>
    );
  }
);
export default InputWithMessage;
