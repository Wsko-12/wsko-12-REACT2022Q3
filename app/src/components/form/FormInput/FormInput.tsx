import React, { Component } from 'react';
import styles from '../form-components.module.css';
import InputWithMessage from '../InputWithMessage/InputWithMessage';

interface IFormInputProps {
  label?: string;
  placeholder?: string;
  pattern?: string;
  type?: React.HTMLInputTypeAttribute;
  title?: string;
  required?: boolean;
  onChange?: (e: React.SyntheticEvent) => void;
  errorMessage?: string;
}

interface IFormInputStates {
  isValid: boolean;
}

export default class FormInput extends Component<IFormInputProps, IFormInputStates> {
  constructor(props: IFormInputProps) {
    super(props);
    this.state = {
      isValid: true,
    };
  }

  handleChange = (e: React.SyntheticEvent) => {
    this.setState({
      isValid: true,
    });
    this.props.onChange && this.props.onChange(e);
  };

  render() {
    const { label, pattern, type, title, required, errorMessage } = this.props;
    let { placeholder } = this.props;
    if (!placeholder) {
      placeholder = label;
    }

    const { isValid } = this.state;
    return (
      <InputWithMessage isValid={isValid} label={label} message={errorMessage}>
        <input
          title={title}
          pattern={pattern}
          className={styles.form__input}
          type={type || 'text'}
          required={required}
          placeholder={placeholder}
          onChange={this.handleChange}
          onInvalid={() => this.setState({ isValid: false })}
        ></input>
      </InputWithMessage>
    );
  }
}
