import React, { memo, useState } from 'react';
import styles from '../form-components.module.css';
import InputWithMessage from '../InputWithMessage/InputWithMessage';

type TDateDirection = 'future' | 'past';

interface IDatePickerProps {
  name?: string;
  label?: string;
  direction?: TDateDirection;
  onChange?: (e: React.SyntheticEvent) => void;
}

const getDateOptions = (direction?: TDateDirection) => {
  const today = new Date().toLocaleDateString('en-CA');
  if (direction) {
    const max = direction !== 'past' ? '' : today;
    const min = direction !== 'future' ? '' : today;
    return { today, max, min };
  }

  return { today, max: '', min: '' };
};

const DatePicker = memo<IDatePickerProps>(({ direction, label, name, onChange }) => {
  const [isValid, setIsValid] = useState(true);

  function handleChange(e: React.SyntheticEvent) {
    setIsValid(true);

    if (onChange) {
      onChange(e);
    }
  }

  const { today, max, min } = getDateOptions(direction);

  return (
    <InputWithMessage isValid={isValid} label={label} message="Invalid date">
      <input
        name={name}
        className={styles.form__input}
        type="date"
        role="datepicker"
        min={min}
        max={max}
        defaultValue={today}
        onChange={handleChange}
        onInvalid={() => setIsValid(false)}
      />
    </InputWithMessage>
  );
});

export default DatePicker;
