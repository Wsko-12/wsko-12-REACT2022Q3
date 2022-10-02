import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import SelectInput from '../SelectInput';

const options = ['a', 'b', 'c', 'd'];
const label = 'test-select';
const placeholder = 'test-placeholder';
describe('SelectInput', () => {
  test('should have label', () => {
    render(<SelectInput options={options} label={label} />);
    const element = screen.getByLabelText(label);
    expect(element).toBeInTheDocument();
  });

  test('should change value', () => {
    render(<SelectInput options={options} placeholder={placeholder} />);
    const element = screen.getByRole<HTMLSelectElement>('combobox');
    fireEvent.change(element, { target: { value: 'b' } });
    expect(element.value).toBe('b');
  });

  test('should have "placeholder"', () => {
    render(<SelectInput options={options} label={label} placeholder={placeholder} />);
    const element = screen.getByText(placeholder);
    expect(element).toBeInTheDocument();
  });

  test('should be invalid while selected placeholder', () => {
    render(<SelectInput options={options} placeholder={placeholder} required={true} />);
    const element = screen.getByRole<HTMLSelectElement>('combobox');
    expect(element).not.toBeValid();
  });
});
