import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';
import { ELSKeys } from 'ts/enums';

describe('SearchBar', () => {
  const fakeLocalStorage = {
    getItem: jest.fn(),
    setItem: jest.fn(),
  };

  const realLocalStorage = window.localStorage;

  beforeAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: fakeLocalStorage,
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'localStorage', {
      value: realLocalStorage,
    });
  });

  test('should have placeholder', () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toBeInTheDocument();
  });

  test('should receive input value', () => {
    render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText<HTMLInputElement>(/search/i);
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(inputElement.value).toBe('test');
  });

  test('should use localStorage', () => {
    const value = 'ls-test';
    fakeLocalStorage.getItem.mockReturnValueOnce(value);
    render(<SearchBar />);
    const inputElement = screen.getByDisplayValue<HTMLInputElement>(value);
    expect(inputElement.value).toBe(value);
  });

  test('should save to localStorage value while unmount', () => {
    const value = 'ls-test-unmount';
    const renderResult = render(<SearchBar />);
    const inputElement = screen.getByPlaceholderText<HTMLInputElement>(/search/i);
    fireEvent.change(inputElement, { target: { value } });
    renderResult.unmount();
    expect(fakeLocalStorage.setItem).toBeCalledWith(ELSKeys.search, value);
  });
});
