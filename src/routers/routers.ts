import { Router } from 'express';
import productRouter from './products.router';
import userRouter from './user.router';
import orderRouter from './order.router';

const routers = Router();

routers.use('/products', productRouter);
routers.use('/users', userRouter);
routers.use('/orders', orderRouter);

export default routers;