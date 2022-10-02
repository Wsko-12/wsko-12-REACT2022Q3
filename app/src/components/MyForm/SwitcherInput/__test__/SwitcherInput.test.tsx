import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import SwitcherInput from '../SwitcherInput';

const firstLabel = 'test-label-first';
const secondLabel = 'test-label-second';
const testid = 'switcher-input';
const pseudoCheckboxTestId = 'switcher-pseudo-checkbox';

describe('SwitcherInput', () => {
  test('should have label', () => {
    render(<SwitcherInput firstLabel={firstLabel} />);
    const element = screen.getByLabelText(firstLabel);
    expect(element).toBeInTheDocument();
  });

  test('should be unchecked by default', () => {
    render(<SwitcherInput firstLabel={firstLabel} />);
    const checkbox = screen.getByTestId<HTMLInputElement>(testid);
    expect(checkbox.checked).toBe(false);
  });

  test('should change value', () => {
    render(<SwitcherInput firstLabel={firstLabel} />);
    const checkbox = screen.getByTestId<HTMLInputElement>(testid);
    expect(checkbox.checked).toBe(false);
    userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  test('should receive checked props', () => {
    render(<SwitcherInput firstLabel={firstLabel} checked={true} />);
    const checkbox = screen.getByTestId<HTMLInputElement>(testid);
    expect(checkbox.checked).toBe(true);
  });

  test('should change value by click on first label', () => {
    render(<SwitcherInput firstLabel={firstLabel} />);
    const checkbox = screen.getByTestId<HTMLInputElement>(testid);
    const label = screen.getByText<HTMLInputElement>(firstLabel);
    expect(checkbox.checked).toBe(false);
    userEvent.click(label);
    expect(checkbox.checked).toBe(true);
  });

  test('should receive and render second label', () => {
    render(<SwitcherInput firstLabel={firstLabel} secondLabel={secondLabel} />);
    const label = screen.getByText<HTMLInputElement>(secondLabel);
    expect(label).toBeInTheDocument();
  });

  test('should change value by click on second label', () => {
    render(<SwitcherInput firstLabel={firstLabel} secondLabel={secondLabel} />);
    const checkbox = screen.getByTestId<HTMLInputElement>(testid);
    const label = screen.getByText<HTMLInputElement>(secondLabel);
    expect(checkbox.checked).toBe(false);
    userEvent.click(label);
    expect(checkbox.checked).toBe(true);
  });

  test('should change value by click on pseudo checkbox', () => {
    render(<SwitcherInput firstLabel={firstLabel} secondLabel={secondLabel} />);
    const checkbox = screen.getByTestId<HTMLInputElement>(testid);
    const pseudo = screen.getByTestId(pseudoCheckboxTestId);
    expect(checkbox.checked).toBe(false);
    userEvent.click(pseudo);
    expect(checkbox.checked).toBe(true);
  });
});
