import React, { Component } from 'react';
import styles from '../form-components.module.css';

interface IDatePickerProps {
  label?: string;
  direction?: 'future' | 'past';
  onChange?: (e: React.SyntheticEvent) => void;
}
interface IDatePickerStates {
  isValid: boolean;
}

export default class DatePicker extends Component<IDatePickerProps, IDatePickerStates> {
  constructor(props: IDatePickerProps) {
    super(props);
    this.state = {
      isValid: true,
    };
  }

  onChange = (e: React.SyntheticEvent) => {
    this.setState({ isValid: true });
    this.props.onChange && this.props.onChange(e);
  };

  render() {
    const { direction, label } = this.props;
    const { isValid } = this.state;

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
          onChange={this.onChange}
          onInvalid={() => this.setState({ isValid: false })}
        />
        {!isValid && <p className={styles.form__message}>Incorrect data</p>}
      </label>
    );
  }
}
