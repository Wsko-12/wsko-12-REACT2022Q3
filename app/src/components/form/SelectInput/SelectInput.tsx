import React, { Component } from 'react';
import styles from '../form-components.module.css';
import InputWithMessage from '../InputWithMessage/InputWithMessage';

interface ISelectInputProps {
  placeholder?: string;
  label?: string;
  options: string[];
  required?: boolean;
  onChange?: (e: React.SyntheticEvent) => void;
}

interface ISelectInputStates {
  isValid: boolean;
}

export default class SelectInput extends Component<ISelectInputProps, ISelectInputStates> {
  constructor(props: ISelectInputProps) {
    super(props);
    this.state = {
      isValid: true,
    };
  }

  onChange = (e: React.SyntheticEvent) => {
    this.setState({ isValid: true });
  };

  render() {
    const { label, required, placeholder, options } = this.props;
    const { isValid } = this.state;
    return (
      <InputWithMessage isValid={isValid} label={label}>
        <select
          className={styles.form__input}
          required={required}
          defaultValue=""
          onChange={this.onChange}
          onInvalid={() => this.setState({ isValid: false })}
        >
          {placeholder && (
            <option value="" disabled={true} hidden={true}>
              {placeholder}
            </option>
          )}
          {options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </InputWithMessage>
    );
  }
}
