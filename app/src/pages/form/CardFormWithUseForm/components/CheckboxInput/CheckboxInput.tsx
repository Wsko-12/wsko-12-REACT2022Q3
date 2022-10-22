import React, { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import styles from '../form-components.module.css';

interface ICheckboxInputProps {
  registration: UseFormRegisterReturn<string>;
  label: string;
}

const CheckboxInput = memo<ICheckboxInputProps>(({ registration, label }) => {
  return (
    <label className={styles.label_checkbox}>
      <input type="checkbox" {...registration} />
      {label}
    </label>
  );
});

export default CheckboxInput;
