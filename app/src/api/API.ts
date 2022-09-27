import { IProduct } from 'ts/interfaces';

const url = 'https://api.escuelajs.co/api/v1/';

export default class API {
  private static async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    const data: T = await response.json();
    if (!data) {
      throw new Error("[API fetchData] can't load data");
    }
    return data;
  }

  public static async getProducts(limit = 20) {
    const endpoint = 'products';
    const query = `?offset=0&limit=${limit}`;
    const link = `${url}${endpoint}${query}`;
    const data = await this.fetchData<IProduct[]>(link);
    return data;
  }
}
