// export interface IProduct {
//   id: number;
//   brand: string;
//   category: string;
//   description: string;
//   discountPercentage: number;
//   images: string[];
//   price: number;
//   rating: number;
//   stock: number;
//   thumbnail: string;
//   title: string;
// }

export interface IProduct {
  id: number;
  image: string;
  brand: string;
  year: number;
  model: string;
  weight: number;
  rating: number;
  camera: number | null;
  sizes: [number, number, number];
  battery: number;
}

export interface IUserCardData {
  id: string;
  avatar: File | undefined;
  name: string;
  surname: string;
  gender: 'male' | 'female';
  country: string;
  email: string;
  birthday: string;
  delivery: string;
  zip: string;
  installBrowsers: boolean;
  notifications: boolean;
  consent: boolean;
}

export interface ICharacterLocation {
  name: string;
  url: string;
}

export interface ICharacter {
  _id: string;
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  name: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
}

export type TResponseInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type TApiResponse<T> = {
  limit: number;
  offset: number;
  page: number;
  pages: number;
  total: number;
  docs: T[];
};
