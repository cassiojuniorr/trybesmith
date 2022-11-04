import { Router } from 'express';
import productRouter from './products.router';

const routers = Router();

routers.use('/products', productRouter);

export default routers;