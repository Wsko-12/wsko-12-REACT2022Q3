import React, { Component } from 'react';
import styles from '../form-components.module.css';
import InputWithMessage from '../InputWithMessage/InputWithMessage';

interface IRadioSwitcherProps {
  values: (string | [string, string])[];
  name: string;
  label?: string;
  onChange?: (e: React.SyntheticEvent) => void;
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

  handleChange = (e: React.SyntheticEvent) => {
    const { onChange } = this.props;
    if (onChange) {
      onChange(e);
    }
    this.setState({ isValid: true });
  };

  render() {
    const { values, name, label } = this.props;
    const { isValid } = this.state;
    return (
      <InputWithMessage isValid={isValid} message="Please, choose one">
        <label className={styles.form__label}>{label}</label>
        {values.map((option) => {
          const [value, text] = Array.isArray(option) ? option : [option.toLowerCase(), option];

          return (
            <label key={value} className={styles.form__label_checkbox}>
              <input
                type="radio"
                name={name}
                value={value}
                required
                onChange={this.handleChange}
                onInvalid={() => this.setState({ isValid: false })}
              />
              {text}
            </label>
          );
        })}
      </InputWithMessage>
    );
  }
}
