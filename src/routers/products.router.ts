import { Router } from 'express';
import ProductsController from '../controllers/products.controller';
import midProduct from '../middlawares/middlawares';

const productRouter = Router();
const productsController = new ProductsController();

productRouter.get('/', (req, res) => productsController.getAll(req, res));

productRouter.post('/', midProduct, (req, res) => productsController.create(req, res));

export default productRouter;