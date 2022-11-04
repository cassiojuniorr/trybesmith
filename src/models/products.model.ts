import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IProducts } from '../interfaces';

export default class ProductsModel {
  connection = mysql;

  async create(product: IProducts): Promise<IProducts> {
    const sql = 'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      sql,
      [product.name, product.amount],
    );

    const newProduct = {
      id: insertId,
      ...product,
    };

    return newProduct;
  }
}