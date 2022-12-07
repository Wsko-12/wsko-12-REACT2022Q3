import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckboxInput from '../CheckboxInput';
import userEvent from '@testing-library/user-event';

const label = 'test-label';
describe('CheckboxInput', () => {
  test('should have label', () => {
    render(<CheckboxInput label={label} />);
    const element = screen.getByLabelText(label);
    expect(element).toBeInTheDocument();
  });

  test('should be unchecked by default', () => {
    render(<CheckboxInput label={label} />);
    const element = screen.getByLabelText<HTMLInputElement>(label);
    expect(element.checked).toBe(false);
  });

  test('should change value', () => {
    render(<CheckboxInput label={label} />);
    const element = screen.getByLabelText<HTMLInputElement>(label);
    expect(element.checked).toBe(false);
    userEvent.click(element);
    expect(element.checked).toBe(true);
  });

  test('should receive default checked props', () => {
    render(<CheckboxInput label={label} checked={true} />);
    const element = screen.getByLabelText<HTMLInputElement>(label);
    expect(element.checked).toBe(true);
  });
});
