import { Router } from 'express';
import productRouter from './products.router';
import userRouter from './user.router';

const routers = Router();

routers.use('/products', productRouter);
routers.use('/users', userRouter);

export default routers;