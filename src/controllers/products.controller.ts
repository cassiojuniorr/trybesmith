import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductsController {
  productService = new ProductService();

  async getAll(req: Request, res: Response) {
    const products = await this.productService.getAll();

    res.status(200).json(products);
  }

  async create(req: Request, res: Response) {
    const product = await this.productService.create(req.body);
    res.status(201).json(product);
  }
}
