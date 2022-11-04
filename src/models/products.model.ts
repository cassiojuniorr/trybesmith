import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IProducts } from '../interfaces';

export default class ProductsModel {
  connection = mysql;

  async getAll(): Promise<IProducts[]> {
    const sql = 'SELECT * FROM Trybesmith.Products';
    const [rows] = await this.connection.execute<IProducts[] & RowDataPacket[]>(sql);

    return rows;
  }

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