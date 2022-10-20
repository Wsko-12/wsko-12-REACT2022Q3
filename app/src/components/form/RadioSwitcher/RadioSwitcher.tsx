import { useDefaultValidation } from 'hooks/customHooks';
import React, { memo } from 'react';
import styles from '../form-components.module.css';
import InputWithMessage from '../InputWithMessage/InputWithMessage';

interface IRadioSwitcherProps {
  values: (string | [string, string])[];
  name: string;
  label?: string;
  onChange?: (e: React.SyntheticEvent) => void;
}

const RadioSwitcher = memo<IRadioSwitcherProps>(({ values, name, label, onChange }) => {
  const validation = useDefaultValidation(onChange);

  return (
    <InputWithMessage isValid={validation.isValid} message="Please, choose one">
      <label className={styles.form__label}>{label}</label>
      {values.map((option) => {
        const [value, text] = Array.isArray(option) ? option : [option.toLowerCase(), option];

        return (
          <label key={value} className={styles.form__label_checkbox}>
            <input type="radio" name={name} value={value} required {...validation.bind} />
            {text}
          </label>
        );
      })}
    </InputWithMessage>
  );
});

export default RadioSwitcher;
