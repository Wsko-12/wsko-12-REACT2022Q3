import { IProduct } from './interfaces';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isProductData = (obj: any): obj is IProduct => {
  if (!obj || !(obj instanceof Object)) {
    return false;
  }

  if (!obj.id || typeof obj.id !== 'number') {
    return false;
  }

  if (!obj.image || typeof obj.image !== 'string') {
    return false;
  }

  if (!obj.brand || typeof obj.brand !== 'string') {
    return false;
  }

  if (!obj.year || typeof obj.year !== 'number') {
    return false;
  }

  if (!obj.model || typeof obj.model !== 'string') {
    return false;
  }

  if (!obj.weight || typeof obj.weight !== 'number') {
    return false;
  }

  if (!obj.rating || typeof obj.rating !== 'number') {
    return false;
  }

  if (obj.camera !== null && typeof obj.camera !== 'number') {
    return false;
  }

  if (
    !obj.sizes ||
    !Array.isArray(obj.sizes) ||
    obj.sizes.length < 3 ||
    !obj.sizes.every((value: unknown) => typeof value === 'number')
  ) {
    return false;
  }

  if (!obj.battery || typeof obj.battery !== 'number') {
    return false;
  }

  return true;
};

export const isProductDataArr = (arr: unknown[]): arr is IProduct[] => {
  return arr.every((value) => isProductData(value));
};
