import OrderModel from '../models/order.model';
import { IOrder } from '../interfaces';

export default class OrderService {
  orderModel = new OrderModel();

  getAll(): Promise<IOrder[]> {
    const orders = this.orderModel.getAll();

    return orders;
  }
}