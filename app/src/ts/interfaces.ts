export interface IProductCategory {
  id: number;
  name: string;
  image: string;
}
export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  category: IProductCategory;
  images: string[];
}
