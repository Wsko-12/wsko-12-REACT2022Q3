import React, { memo } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface IFileInputProps {
  registration: UseFormRegisterReturn<string>;
}

const FileInput = memo<IFileInputProps>(({ registration }) => (
  <input type="file" {...registration} />
));

export default FileInput;
