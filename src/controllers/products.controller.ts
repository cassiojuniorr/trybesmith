import { Request, Response } from 'express';
import ProductService from '../services/products.service';

export default class ProductsController {
  productService = new ProductService();

  async create(req: Request, res: Response) {
    const product = await this.productService.create(req.body);
    res.status(201).json(product);
  }
}
