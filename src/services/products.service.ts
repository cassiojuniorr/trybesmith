import ProductsModel from '../models/products.model';
import { IProducts } from '../interfaces';

export default class ProductService {
  productsModel = new ProductsModel();

  getAll(): Promise<IProducts[]> {
    const products = this.productsModel.getAll();

    return products;
  }

  create(product: IProducts): Promise<IProducts> {
    const newProduct = this.productsModel.create(product);

    return newProduct;
  }
}