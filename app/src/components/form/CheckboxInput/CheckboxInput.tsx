import React, { memo, SyntheticEvent } from 'react';
import styles from '../form-components.module.css';

interface ICheckboxInputProps {
  label?: string;
  checked?: boolean;
  name?: string;
  onChange?: (e: SyntheticEvent<HTMLInputElement>) => void;
}

const CheckboxInput = memo<ICheckboxInputProps>(
  ({ name, label = '', checked, onChange = () => {} }) => {
    return (
      <label className={styles.label_checkbox}>
        <input type="checkbox" defaultChecked={checked} name={name} onChange={onChange} />
        {label}
      </label>
    );
  }
);

export default CheckboxInput;
