import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import DatePicker from '../DatePicker';
import { act } from 'react-dom/test-utils';

describe('DatePicker', () => {
  const mockDate = jest.fn();

  const past = '1999-01-01';
  const date = '2000-01-01';
  const future = '2001-01-01';

  beforeAll(() => {
    Date.prototype.toLocaleDateString = mockDate;
  });

  beforeEach(() => {
    mockDate.mockReturnValue(date);
  });

  afterAll(() => {
    mockDate.mockRestore();
  });

  test('should have label', () => {
    const label = 'test-label';
    render(<DatePicker label={label} />);
    const result = screen.getByLabelText(label);
    expect(result).toBeInTheDocument();
  });

  test('should render today date by default', () => {
    render(<DatePicker />);
    const element = screen.getByRole<HTMLInputElement>('datepicker');
    expect(element.value).toBe(date);
  });

  test('should change value', () => {
    render(<DatePicker />);
    const element = screen.getByRole<HTMLInputElement>('datepicker');

    act(() => {
      fireEvent.change(element, { target: { value: past } });
      expect(element.value).toBe(past);
    });
    act(() => {
      fireEvent.change(element, { target: { value: future } });
      expect(element.value).toBe(future);
    });
  });

  test('cannot select future date if direction prop sets to past', async () => {
    render(<DatePicker direction="past" />);
    const element = screen.getByRole<HTMLInputElement>('datepicker');
    act(() => {
      fireEvent.change(element, { target: { value: future } });
      expect(element).not.toBeValid();
    });
  });

  test('cannot select past date if direction prop sets to future', async () => {
    render(<DatePicker direction="future" />);
    const element = screen.getByRole<HTMLInputElement>('datepicker');
    act(() => {
      fireEvent.change(element, { target: { value: past } });
      expect(element).not.toBeValid();
    });
  });
});
