import React from 'react';
import { render, screen } from '@testing-library/react';
import CardsList from '../CardsList';
import { IProduct } from 'ts/interfaces';

describe('CardsList', () => {
  test('should render message "Nothing found" if receive empty array', () => {
    render(<CardsList products={[]} />);
    const messageElement = screen.getByText(/Nothing found/i);
    expect(messageElement).toBeInTheDocument();
  });

  test('should render several cards', () => {
    const fakeProducts: IProduct[] = [
      {
        id: 0,
        image: '',
        brand: 'TEST_1',
        year: 0,
        model: '',
        weight: 0,
        rating: 0,
        camera: null,
        sizes: [0, 0, 0],
        battery: 0,
      },
      {
        id: 1,
        image: '',
        brand: 'TEST_2',
        year: 0,
        model: '',
        weight: 0,
        rating: 0,
        camera: null,
        sizes: [0, 0, 0],
        battery: 0,
      },
    ];

    render(<CardsList products={fakeProducts} />);
    const firstCardTitle = screen.getByText(/TEST_1/i);
    expect(firstCardTitle).toBeInTheDocument();

    const secondCardTitle = screen.getByText(/TEST_2/i);
    expect(secondCardTitle).toBeInTheDocument();
  });
});
