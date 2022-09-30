import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import FormInput from '../FormInput';

const label = 'test-label';
describe('FormInput', () => {
  test('should have placeholder', () => {
    render(<FormInput label={label} />);
    const result = screen.getByPlaceholderText(label);
    expect(result).toBeInTheDocument();
  });

  test('should have label', () => {
    render(<FormInput label={label} />);
    const result = screen.getByLabelText(label);
    expect(result).toBeInTheDocument();
  });

  test('should change when type', () => {
    const value = 'test';
    render(<FormInput label={label} />);
    const result = screen.getByLabelText<HTMLInputElement>(label);
    fireEvent.change(result, { target: { value } });

    expect(result.value).toBe(value);
  });
});
