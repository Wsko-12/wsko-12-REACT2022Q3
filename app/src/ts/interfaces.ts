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
