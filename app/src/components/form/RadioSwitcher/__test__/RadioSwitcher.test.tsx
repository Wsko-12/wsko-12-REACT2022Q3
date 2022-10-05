import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import RadioSwitcher from '../RadioSwitcher';

const label = 'test-label';
const values = ['test1', 'test2'];
describe('RadioSwitcher', () => {
  test('should have label', () => {
    render(<RadioSwitcher label={label} values={values} name={'test'} />);
    const element = screen.getByText(label);
    expect(element).toBeInTheDocument();
  });

  test('should render values', () => {
    render(<RadioSwitcher label={label} values={values} name={'test'} />);
    const input = screen.getByLabelText(values[0]);
    const secondInput = screen.getByLabelText(values[1]);
    expect(input).toBeInTheDocument();
    expect(secondInput).toBeInTheDocument();
  });

  test('should change value', () => {
    render(<RadioSwitcher label={label} values={values} name={'test'} />);
    const input = screen.getByLabelText(values[0]);
    expect(input).not.toBeChecked();
    userEvent.click(input);
    expect(input).toBeChecked();
  });

  test('value should be unchecked when click other input', () => {
    render(<RadioSwitcher label={label} values={values} name={'test'} />);
    const input = screen.getByLabelText(values[0]);
    const secondInput = screen.getByLabelText(values[1]);
    expect(input).not.toBeChecked();
    userEvent.click(input);
    expect(input).toBeChecked();
    userEvent.click(secondInput);
    expect(input).not.toBeChecked();
  });
});
