import React, { Component } from 'react';
import styles from '../form-components.module.css';
import InputWithMessage from '../InputWithMessage/InputWithMessage';

interface IRadioSwitcherProps {
  values: (string | [string, string])[];
  name: string;
  label?: string;
}

interface IRadioSwitcherState {
  isValid: boolean;
}
export default class RadioSwitcher extends Component<IRadioSwitcherProps, IRadioSwitcherState> {
  constructor(props: IRadioSwitcherProps) {
    super(props);
    this.state = {
      isValid: true,
    };
  }
  render() {
    const { values, name, label } = this.props;
    const { isValid } = this.state;
    return (
      <InputWithMessage isValid={isValid} message="Please, choose one">
        <label className={styles.form__label}>{label}</label>
        {values.map((value) => {
          if (Array.isArray(value)) {
            const [val, text] = value;
            return (
              <label key={val} className={styles.form__label_checkbox}>
                <input
                  type="radio"
                  name={name}
                  value={val}
                  required
                  onChange={() => this.setState({ isValid: true })}
                  onInvalid={() => this.setState({ isValid: false })}
                />
                {text}
              </label>
            );
          }

          return (
            <label key={value} className={styles.form__label_checkbox}>
              <input
                type="radio"
                name={name}
                value={value.toLowerCase()}
                required
                onChange={() => this.setState({ isValid: true })}
                onInvalid={() => this.setState({ isValid: false })}
              />
              {value}
            </label>
          );
        })}
      </InputWithMessage>
    );
  }
}
