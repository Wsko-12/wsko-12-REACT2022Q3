import React, { memo } from 'react';
import styles from '../form-components.module.css';

interface ICheckboxInputProps {
  label?: string;
  checked?: boolean;
  name?: string;
}

const CheckboxInput = memo<ICheckboxInputProps>(({ name, label = '', checked }) => {
  return (
    <label className={styles.form__label_checkbox}>
      <input type="checkbox" defaultChecked={checked} name={name} />
      {label}
    </label>
  );
});

export default CheckboxInput;
