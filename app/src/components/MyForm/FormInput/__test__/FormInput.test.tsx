import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import FormInput from '../FormInput';

const label = 'test-label';
const placeholder = 'test-placeholder';
describe('FormInput', () => {
  test('should be rendered without label and placeholder', () => {
    render(<FormInput />);
    const result = screen.getByRole('textbox');
    expect(result).toBeInTheDocument();
  });

  test('should render label if receive this prop', () => {
    render(<FormInput label={label} />);
    const result = screen.getByLabelText(label);
    expect(result).toBeInTheDocument();
  });

  test('should render placeholder if receive label equals label', () => {
    render(<FormInput label={label} />);
    const result = screen.getByPlaceholderText(label);
    expect(result).toBeInTheDocument();
  });

  test('should have placeholder different from label if receive it prop', () => {
    render(<FormInput label={label} placeholder={placeholder} />);
    const result = screen.getByPlaceholderText(placeholder);
    expect(result).toBeInTheDocument();
  });

  test('should change when type', () => {
    const value = 'test';
    render(<FormInput label={label} />);
    const result = screen.getByLabelText<HTMLInputElement>(label);
    fireEvent.change(result, { target: { value } });

    expect(result.value).toBe(value);
  });

  test('should be text type by default', () => {
    render(<FormInput />);
    const result = screen.getByRole<HTMLInputElement>('textbox');
    expect(result.type).toBe('text');
  });

  test('should apply type prop', () => {
    render(<FormInput type="email" />);
    const result = screen.getByRole<HTMLInputElement>('textbox');
    expect(result.type).toBe('email');
  });
});
