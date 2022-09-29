import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card';
import { IProduct } from 'ts/interfaces';

describe('Card', () => {
  const fakeCardData: IProduct = {
    id: 0,
    brand: 'test-brand',
    image: '',
    model: 'test-model',
    year: 1000,
    weight: 200,
    sizes: [10, 10, 10],
    battery: 2500,
    rating: 4,
    camera: 2,
  };

  const { model, brand, camera, rating } = fakeCardData;

  test('should be rendered with titles', () => {
    render(<Card data={fakeCardData} />);

    const titleElement = screen.getByText(brand);
    const subtitleElement = screen.getByText(model);
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });

  test('should be have image alt with brand and model separated by space', () => {
    render(<Card data={fakeCardData} />);

    const imageElement = screen.getByAltText(`${brand} ${model}`);
    expect(imageElement).toBeInTheDocument();
  });

  test('should not render camera info if data have camera property with null', () => {
    fakeCardData.camera = null;
    render(<Card data={fakeCardData} />);
    fakeCardData.camera = camera;

    const cameraInfo = screen.queryByTestId(`card-camera-info`);
    expect(cameraInfo).not.toBeInTheDocument();
  });

  test('should correct render rating stars (with rounding floor)', () => {
    fakeCardData.rating = 3.2;
    let renderResult = render(<Card data={fakeCardData} />);
    fakeCardData.rating = rating;

    let ratingStars = screen.queryAllByTestId(`card-rating-star`);
    renderResult.unmount();
    expect(ratingStars.length).toBe(3);

    fakeCardData.rating = 4.8;
    renderResult = render(<Card data={fakeCardData} />);
    fakeCardData.rating = rating;

    ratingStars = screen.queryAllByTestId(`card-rating-star`);
    renderResult.unmount();

    expect(ratingStars.length).toBe(4);
  });
});
