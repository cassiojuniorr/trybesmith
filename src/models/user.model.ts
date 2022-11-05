import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { IUser } from '../interfaces';

export default class UserModel {
  connection = mysql;

  async getByName(username: string, password: string): Promise<IUser> {
    const sql = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?';

    const [[rows]] = await this.connection.execute<IUser[] & RowDataPacket[]>(
      sql, 
      [username, password],
    );

    return rows;
  }

  async create(user: IUser): Promise<IUser> {
    const sql = `INSERT INTO Trybesmith.Users (
      username, classe, level, password) VALUES (?, ?, ?, ?)`;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      sql,
      [user.username, user.classe, user.level, user.password],
    );

    const newUser = {
      id: insertId,
      ...user,
    };

    return newUser;
  }
}