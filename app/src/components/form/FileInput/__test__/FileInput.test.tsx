import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import FileInput from '../FileInput';

const label = 'test-label';
const fileName = 'test-file.png';
const file = new File([], fileName, { type: 'image/png' });

describe('FileInput', () => {
  test('should render label', () => {
    render(<FileInput label={label} />);
    const element = screen.getByLabelText(label);
    expect(element).toBeInTheDocument();
  });

  test('should render file name when it was uploaded', async () => {
    render(<FileInput label={label} />);
    const element = screen.getByLabelText(label);
    userEvent.upload(element, file);
    const reg = new RegExp(fileName);
    const fileText = await screen.findByText(reg);
    expect(fileText).toBeInTheDocument();
  });
});
