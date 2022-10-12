import React, { Component } from 'react';
import styles from '../form-components.module.css';
import InputWithMessage from '../InputWithMessage/InputWithMessage';

type TDateDirection = 'future' | 'past';

interface IDatePickerProps {
  name?: string;
  label?: string;
  direction?: TDateDirection;
  onChange?: (e: React.SyntheticEvent) => void;
}

interface IDatePickerStates {
  isValid: boolean;
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

export default class DatePicker extends Component<IDatePickerProps, IDatePickerStates> {
  constructor(props: IDatePickerProps) {
    super(props);
    this.state = {
      isValid: true,
    };
  }

  handleChange = (e: React.SyntheticEvent) => {
    this.setState({ isValid: true });

    // this.props.onChange && this.props.onChange(e);

    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
  };

  render() {
    const { direction, label, name } = this.props;
    const { isValid } = this.state;

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
          onChange={this.handleChange}
          onInvalid={() => this.setState({ isValid: false })}
        />
      </InputWithMessage>
    );
  }
}
