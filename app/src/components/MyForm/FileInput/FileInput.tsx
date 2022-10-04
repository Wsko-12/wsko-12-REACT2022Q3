import React, { Component } from 'react';
import styles from '../form.module.css';

interface IFileInputProps {
  label?: string;
}

// export default function FileInput({ label }: IFileInputProps) {
//   function changeHandler(e: React.FormEvent<HTMLInputElement>) {
//     if (e.currentTarget.files) {
//       console.log(e.currentTarget.files[0].name);
//     }
//   }

//   return (
//     <label className={styles.form__label_file}>
//       <div className={styles.form__button_add}>{label}</div>
//       <input className={styles.form__input_file} type="file" onChange={changeHandler}></input>
//       <p>File</p>
//     </label>
//   );
// }

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
    if (e.currentTarget.files) {
      const fileName = e.currentTarget.files[0].name;
      this.setState({ fileName });
    }
  };

  render() {
    const { label } = this.props;
    const { fileName } = this.state;
    return (
      <label className={styles.form__label_file}>
        <div className={styles.form__button_add}>{label}</div>
        <input className={styles.form__input_file} type="file" onChange={this.changeHandler} />
        {fileName && <p>image: {fileName}</p>}
      </label>
    );
  }
}
