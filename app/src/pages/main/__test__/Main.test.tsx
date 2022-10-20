import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../Main';
import API from '../../../api/API';
import { ICharacter, TApiResponse } from 'ts/interfaces';
import userEvent from '@testing-library/user-event';

jest.mock('../../../api/API');
const mockGetCharacters = jest.fn();
API.getCharacters = mockGetCharacters;

const fakeCharacter: ICharacter = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: { name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1' },
  location: { name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3' },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [
    'https://rickandmortyapi.com/api/episode/1',
    'https://rickandmortyapi.com/api/episode/2',
  ],
  url: 'https://rickandmortyapi.com/api/character/1',
  created: '2017-11-04T18:48:46.250Z',
};

const fakeResponse: TApiResponse<ICharacter> = {
  info: {
    count: 20,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: 'https://rickandmortyapi.com/api/character/?page=1',
  },
  results: [fakeCharacter],
};

const spy = jest.spyOn(console, 'error');
spy.mockImplementation(() => {});

describe('Main page', () => {
  afterAll(() => {
    spy.mockRestore();
    mockGetCharacters.mockRestore();
  });

  test('should call api', () => {
    render(<Main />);
    expect(mockGetCharacters).toBeCalled();
  });

  test('first call api should be with page 1 and empty search query', () => {
    render(<Main />);
    expect(mockGetCharacters).toHaveBeenLastCalledWith(1, '');
  });

  test('should correct render pages', async () => {
    mockGetCharacters.mockReturnValue(Promise.resolve(fakeResponse));
    render(<Main />);
    const firstButton = await screen.findByText('1');
    const lastButton = await screen.findByText('5');
    expect(firstButton).toBeInTheDocument();
    expect(lastButton).toBeInTheDocument();
  });

  test('should send request when click pagination', async () => {
    mockGetCharacters.mockReturnValue(Promise.resolve(fakeResponse));
    render(<Main />);
    const button = await screen.findByText('2');
    userEvent.click(button);
    expect(mockGetCharacters).toBeCalledTimes(2);
  });

  test('should send correct request when click pagination', async () => {
    mockGetCharacters.mockReturnValue(Promise.resolve(fakeResponse));
    render(<Main />);
    const button = await screen.findByText('2');
    userEvent.click(button);
    expect(mockGetCharacters).toHaveBeenLastCalledWith(2, '');

    const thirdButton = await screen.findByText('3');
    userEvent.click(thirdButton);
    expect(mockGetCharacters).toHaveBeenLastCalledWith(3, '');

    const secondButton = await screen.findByText('2');
    userEvent.click(secondButton);
    expect(mockGetCharacters).toHaveBeenLastCalledWith(2, '');
  });

  test('should send search request', async () => {
    mockGetCharacters.mockReturnValue(Promise.resolve(fakeResponse));
    render(<Main />);
    const search = await screen.findByPlaceholderText(/search/i);
    userEvent.type(search, 'test');
    const button = await screen.findByText(/find/i);
    userEvent.click(button);
    userEvent.clear(search);

    expect(mockGetCharacters).toHaveBeenCalledTimes(2);
  });

  test('should send search request with page 1 and correct search value', async () => {
    mockGetCharacters.mockReturnValue(Promise.resolve(fakeResponse));
    render(<Main />);
    const search = await screen.findByPlaceholderText(/search/i);
    userEvent.type(search, 'test');
    const button = await screen.findByText(/find/i);
    userEvent.click(button);
    userEvent.clear(search);
    expect(mockGetCharacters).toHaveBeenLastCalledWith(1, 'test');
  });

  test('pagination should work with search query', async () => {
    mockGetCharacters.mockReturnValue(Promise.resolve(fakeResponse));
    render(<Main />);
    const search = await screen.findByPlaceholderText(/search/i);
    userEvent.type(search, 'test');
    const button = await screen.findByText(/find/i);
    userEvent.click(button);

    const pagination = await screen.findByText(/2/i);
    userEvent.click(pagination);
    expect(mockGetCharacters).toHaveBeenLastCalledWith(2, 'test');
  });
});
