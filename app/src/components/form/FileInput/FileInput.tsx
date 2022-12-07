import React, { Component } from 'react';
import styles from '../form-components.module.css';

interface IFileInputProps {
  label?: string;
  name?: string;
}

interface IFileInputStates {
  fileName: string;
}

export default class FileInput extends Component<IFileInputProps, IFileInputStates> {
  constructor(props: IFileInputProps) {
    super(props);
    this.state = {
      fileName: '',
    };
  }

  changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      const fileName = e.currentTarget.files[0].name;
      this.setState({ fileName });
      return;
    }
    this.setState({ fileName: '' });
  };

  render() {
    const { label, name } = this.props;
    const { fileName } = this.state;
    return (
      <label className={styles.form__label_file}>
        <div className={styles.form__button_add}>{label}</div>
        <input
          className={styles.form__input_file}
          type="file"
          onChange={this.changeHandler}
          name={name}
        />
        {fileName && <p>image: {fileName}</p>}
      </label>
    );
  }
}
