import ProductsModel from '../models/products.model';
import { IProducts } from '../interfaces';

export default class ProductService {
  productsModel = new ProductsModel();

  create(product: IProducts): Promise<IProducts> {
    const newProduct = this.productsModel.create(product);

    return newProduct;
  }
}