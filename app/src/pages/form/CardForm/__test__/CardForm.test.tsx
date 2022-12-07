import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { act } from 'react-dom/test-utils';
import CardForm from '../../CardFormWithUseForm/CardForm';

//old
// import CardForm from '../CardForm';

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
    });
    expect(button).not.toBeDisabled();
  });

  test('submit button should be disabled if form invalid', () => {
    render(<CardForm />);
    const button = screen.getByText(/submit/i);
    const input = screen.getByLabelText(/surname/i);

    expect(button).toBeDisabled();
    userEvent.type(input, 'test');
    userEvent.click(button);
    expect(button).toBeDisabled();
  });

  test('submit button should be enabled if form valid', () => {
    // I'm stuck and I give up
    // firstly at line [1] for no reason calls Submit
    // if comment this line submit won't call.
    // If log data from this submit we will see
    // that field email and zip are empty
    // but I check it at lines [2] and [3]
    // but name and surname is ok
    // It looks like at line [4] calls this click
    // but all checks below work
    // at browser all works fine
    // I don't understand what is problem
    render(<CardForm />);
    const button = screen.getByText(/submit/i);
    expect(button).toBeDisabled();

    act(() => {
      userEvent.type(screen.getByLabelText(/^name/i), 'name');
      userEvent.type(screen.getByLabelText(/surname/i), 'surname');
    });

    expect(button).not.toBeDisabled();

    act(() => {
      // [4]
      userEvent.click(button);
    });

    expect(button).toBeDisabled();

    const email = screen.getByLabelText<HTMLInputElement>(/^email/i);
    act(() => {
      userEvent.type(email, 'test@test.com');
    });
    // [2]
    expect(email.value).toBe('test@test.com');

    const zip = screen.getByLabelText<HTMLInputElement>(/zip/i);
    act(() => {
      userEvent.click(screen.getByDisplayValue(/female/i));
      userEvent.type(zip, '111');
    });
    // [3]
    expect(zip.value).toBe('111');

    act(() => {
      userEvent.selectOptions(screen.getByLabelText(/country/i), 'Belarus');
    });

    expect(button).toBeDisabled();
    act(() => {
      // [1]
      userEvent.click(screen.getByLabelText(/I want to receive notifications/i));
    });

    expect(button).not.toBeDisabled();
  });
});
