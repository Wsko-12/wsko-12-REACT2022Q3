import { IProduct } from 'ts/interfaces';
import products from './data.json';

// const url = 'https://dummyjson.com/';

// export default class API {
//   private static async fetchData<T>(url: string): Promise<T> {
//     const response = await fetch(url);
//     if (response.ok) {
//       const data: T = await response.json();
//       return data;
//     } else {
//       throw new Error(`[API fetchData] can't load data ${url}`);
//     }
//   }

//   public static async getProducts() {
//     const endpoint = 'products';
//     const link = `${url}${endpoint}`;

//     try {
//       const data = await this.fetchData<{
//         limit: number;
//         products: IProduct[];
//         skip: number;
//         total: number;
//       }>(link);
//       console.log(data.products[0]);
//       return data.products;
//     } catch (err) {
//       if (err instanceof Error) {
//         console.error(err.message);
//       }
//     }
//   }
// }

export default class API {
  public static getProducts() {
    return new Promise(async (res) => {
      setTimeout(() => {
        res(products);
      }, 1000);
    });
  }
}
