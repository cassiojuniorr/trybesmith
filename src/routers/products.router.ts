import { Router } from 'express';
import ProductsController from '../controllers/products.controller';

const productRouter = Router();

const productsController = new ProductsController();

productRouter.post('/', (req, res) => productsController.create(req, res));

export default productRouter;