import { Product } from 'types/Product';

export default class ProductsService {
  static async getProducts() : Promise<Product[]> {
    let data = await fetch("db/db.json")
    .then(response => response.json())
    .then(json => json.products)

    return data;
  }
}