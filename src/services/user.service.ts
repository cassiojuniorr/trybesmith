import * as jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';
import { IUser } from '../interfaces';

export default class UserService {
  userModel = new UserModel();

  async create(user: IUser): Promise<string> {
    const newUser = await this.userModel.create(user);

    const token = jwt.sign({
      username: newUser.username, password: newUser.password, 
    }, process.env.JWT_SECRET as string);

    return token;
  }
}