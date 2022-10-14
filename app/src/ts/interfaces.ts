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
  avatar: File;
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
  id: number;
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  type: string;
  gender: 'unknown' | 'Female' | 'Male' | 'Genderless';
  origin: ICharacterLocation;
  location: ICharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export type TResponseInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export type TApiResponse<T> = {
  info: TResponseInfo;
  results: T[];
};
