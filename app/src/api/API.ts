import { ICharacter } from 'ts/interfaces';
// import products from './data.json';

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

// export default class API {
//   public static getProducts(): Promise<IProduct[]> {
//     return new Promise(async (res) => {
//       setTimeout(() => {
//         res(products as IProduct[]);
//       }, 1000);
//     });
//   }
// }

const url = 'https://rickandmortyapi.com/api';

type TResponseInfo = {
  count: number;
  pages: number;
  next: string;
  prev: string;
};

export default class API {
  private static async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (response.ok) {
      const data: T = await response.json();
      return data;
    } else {
      throw new Error(`[API fetchData] can't load data ${url}`);
    }
  }

  public static async getCharacters(page = 1) {
    const endpoint = `/character?page=${page}`;
    const link = `${url}${endpoint}`;

    try {
      const data = await this.fetchData<{
        info: TResponseInfo;
        results: ICharacter[];
      }>(link);
      return data;
    } catch (err) {
      if (err instanceof Error) {
        console.error(err.message);
      }
    }
  }
}
