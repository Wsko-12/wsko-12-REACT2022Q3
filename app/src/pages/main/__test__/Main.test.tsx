import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from '../Main';

interface IFakeApi {
  getProducts: () => Promise<unknown>;
}
const fakeApi: IFakeApi = {
  getProducts: async () => {},
};
jest.mock('../../../api/API', () => fakeApi);
const spy = jest.spyOn(console, 'error');
spy.mockImplementation(() => {});

describe('Main page', () => {
  afterAll(() => {
    spy.mockRestore();
  });

  test('should render loader while receive data', async () => {
    fakeApi.getProducts = async () => {
      return new Promise((res) => {
        setTimeout(res, 1000);
      });
    };
    render(<Main />);
    const loaderElement = await screen.findByTestId('loader');
    expect(loaderElement).toBeInTheDocument();
  });

  test('should render cards if receive correct data', async () => {
    fakeApi.getProducts = async () => {
      const data = [
        {
          id: 1,
          image:
            'https://www.mobilephonemuseum.com/assets/static/023d29d2ead30af6732c0f7a49e3a7b1/9d75f/eb92b877-5df2-4ddc-a708-a9667cbc598b.png',
          brand: 'TEST_1',
          year: 2000,
          model: '3310',
          weight: 133,
          rating: 5,
          camera: null,
          sizes: [133, 48, 22],
          battery: 900,
        },
        {
          id: 2,
          image:
            'https://www.mobilephonemuseum.com/assets/static/d7c49f60d18880641ea35579d2b85b04/9d75f/677bc7f4-31b7-4957-b5a1-f6b6176b9080.png',
          brand: 'TEST_2',
          year: 2005,
          model: '1600',
          weight: 85,
          rating: 3.7,
          camera: null,
          sizes: [104, 45, 17],
          battery: 900,
        },
      ];
      return Promise.resolve(data);
    };
    render(<Main />);
    const firstCardElement = await screen.findByText(/TEST_1/i);
    expect(firstCardElement).toBeInTheDocument();

    const secondCardElement = screen.getByText(/TEST_2/i);
    expect(secondCardElement).toBeInTheDocument();
  });

  test('should render "Sorry, something went wrong" if fetch rejected', async () => {
    fakeApi.getProducts = async () => {
      return Promise.reject();
    };
    render(<Main />);
    const messageElement = await screen.findByText(/Sorry, something went wrong/i);
    expect(messageElement).toBeInTheDocument();
  });

  test('should render "Sorry, something went wrong" receive incorrect data from fetch', async () => {
    fakeApi.getProducts = async () => {
      const data = {
        a: 2,
      };
      return Promise.resolve(data);
    };
    render(<Main />);
    const messageElement = await screen.findByText(/Sorry, something went wrong/i);
    expect(messageElement).toBeInTheDocument();
  });

  test('should render "Sorry, something went wrong" receive incorrect data from fetch 2', async () => {
    fakeApi.getProducts = async () => {
      const data = [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ];
      return Promise.resolve(data);
    };
    render(<Main />);
    const messageElement = await screen.findByText(/Sorry, something went wrong/i);
    expect(messageElement).toBeInTheDocument();
  });
});
