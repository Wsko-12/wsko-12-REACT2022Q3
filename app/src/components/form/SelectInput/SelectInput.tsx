import React, { Component } from 'react';
import styles from '../form-components.module.css';
import InputWithMessage from '../InputWithMessage/InputWithMessage';

interface ISelectInputProps {
  placeholder?: string;
  label?: string;
  options: string[];
  required?: boolean;
  onChange?: (e: React.SyntheticEvent) => void;
  errorMessage?: string;
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
    this.props.onChange && this.props.onChange(e);
  };

  render() {
    const { label, required, placeholder, options, errorMessage } = this.props;
    const { isValid } = this.state;
    return (
      <InputWithMessage isValid={isValid} label={label} message={errorMessage}>
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
