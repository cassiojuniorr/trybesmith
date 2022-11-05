import { RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IOrder } from '../interfaces';

export default class OrderModel {
  connection = mysql;

  async getAll(): Promise<IOrder[]> {
    const sql = `SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
    FROM Trybesmith.Orders AS o INNER JOIN Trybesmith.Products as p 
    GROUP BY o.id;`;
    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(sql);
    
    return rows;
  }
}