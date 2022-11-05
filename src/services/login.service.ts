import * as jwt from 'jsonwebtoken';
import UserModel from '../models/user.model';
import { ILogin } from '../interfaces';

export default class LoginService {
  userModel = new UserModel();

  async login(login: ILogin): Promise<string | null> {
    const { username, password } = login;
    const user = await this.userModel.getByName(username, password);
    if (!user) return null;

    const token = jwt.sign({
      username, password, 
    }, process.env.JWT_SECRET as string);

    return token;
  }
}