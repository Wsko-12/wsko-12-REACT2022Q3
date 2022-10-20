import React, { memo, useState } from 'react';
import styles from '../form-components.module.css';

interface IFileInputProps {
  label?: string;
  name?: string;
}

const FileInput = memo<IFileInputProps>(({ label, name }) => {
  const [fileName, setFileName] = useState('');

  function changeHandler(e: React.FormEvent<HTMLInputElement>) {
    if (e.currentTarget.files && e.currentTarget.files[0]) {
      const fileName = e.currentTarget.files[0].name;
      setFileName(fileName);
      return;
    }
    setFileName('');
  }

  return (
    <label className={styles.label_file}>
      <div className={styles.button_add}>{label}</div>
      <input className={styles.input_file} type="file" onChange={changeHandler} name={name} />
      {fileName && <p>image: {fileName}</p>}
    </label>
  );
});

export default FileInput;
