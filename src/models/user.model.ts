import { ResultSetHeader } from 'mysql2';
import mysql from './connection';
import { IUser } from '../interfaces';

export default class UserModel {
  connection = mysql;

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

