import { Request, Response } from 'express';
import ProductService from '../services/products.service';
import { validateProducts } from '../services/validations';

export default class ProductsController {
  productService = new ProductService();

  async getAll(req: Request, res: Response) {
    const products = await this.productService.getAll();

    res.status(200).json(products);
  }

  async create(req: Request, res: Response) {
    const { name, amount } = req.body;
    const { error, value } = validateProducts({ name, amount });
    
    if (error) {
      const status = error.message === '"name" is required' 
      || error.message === '"amount" is required' ? 400 : 422;
      return res.status(status).json({ message: error.message });
    }

    const product = await this.productService.create(value);
    res.status(201).json(product);
  }
}
