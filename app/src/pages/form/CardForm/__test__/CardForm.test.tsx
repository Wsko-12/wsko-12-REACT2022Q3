import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import CardForm from '../CardForm';

describe('CardForm', () => {
  test('submit button should be disabled at initialization', () => {
    render(<CardForm />);
    const button = screen.getByText(/submit/i);
    expect(button).toBeDisabled();
  });

  test('submit button should be enabled after typing', () => {
    render(<CardForm />);
    const button = screen.getByText(/submit/i);
    const input = screen.getByLabelText(/surname/i);

    expect(button).toBeDisabled();
    act(() => {
      userEvent.type(input, 'test');
      expect(button).not.toBeDisabled();
    });
  });

  test('submit button should be disabled if form invalid', () => {
    render(<CardForm />);
    const button = screen.getByText(/submit/i);
    const input = screen.getByLabelText(/surname/i);

    expect(button).toBeDisabled();
    act(() => {
      userEvent.type(input, 'test');
      userEvent.click(button);
    });
    expect(button).toBeDisabled();
  });

  test('submit button should be enabled if form valid', () => {
    render(<CardForm />);
    const button = screen.getByText(/submit/i);
    expect(button).toBeDisabled();
    act(() => {
      userEvent.type(screen.getByLabelText(/^name/i), 'test');
      userEvent.type(screen.getByLabelText(/surname/i), 'test');

      expect(button).not.toBeDisabled();
      userEvent.click(button);
    });

    expect(button).toBeDisabled();

    act(() => {
      userEvent.type(screen.getByLabelText(/^email/i), 'test@test.com');
      userEvent.click(screen.getByDisplayValue(/female/i));
      userEvent.type(screen.getByLabelText(/zip/i), '111');
      userEvent.selectOptions(screen.getByLabelText(/country/i), 'Belarus');
      expect(button).toBeDisabled();
      userEvent.click(screen.getByLabelText(/I want to receive notifications/i));

      expect(button).not.toBeDisabled();
    });
  });
});
