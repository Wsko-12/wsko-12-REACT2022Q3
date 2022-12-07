import { IProduct, IUserCardData } from './interfaces';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isUserCardData = (obj: any): obj is IUserCardData => {
  if (!(obj.avatar instanceof File)) {
    return false;
  }
  if (new Date(obj.birthday).toString() === 'Invalid Date') {
    return false;
  }
  if (new Date(obj.delivery).toString() === 'Invalid Date') {
    return false;
  }
  if (typeof obj.name != 'string') {
    return false;
  }
  if (typeof obj.surname != 'string') {
    return false;
  }
  if (typeof obj.email != 'string') {
    return false;
  }
  if (typeof obj.gender != 'string' || (obj.gender != 'male' && obj.gender != 'female')) {
    return false;
  }

  if (typeof obj.country != 'string') {
    return false;
  }

  if (typeof obj.zip != 'string') {
    return false;
  }

  if (typeof obj.installBrowsers != 'boolean') {
    return false;
  }

  if (typeof obj.notifications != 'boolean') {
    return false;
  }

  if (typeof obj.consent != 'boolean') {
    return false;
  }

  if (typeof obj.id != 'string') {
    return false;
  }
  return true;
};
