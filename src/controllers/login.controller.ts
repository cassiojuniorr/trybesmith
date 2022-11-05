import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import validateLogin from '../services/validations';

export default class LoginController {
  loginService = new LoginService();

  async login(req: Request, res: Response) {
    const { type, message } = validateLogin(req.body);
    if (type) return res.status(400).json({ message });

    const token = await this.loginService.login(message);
    if (!token) return res.status(401).json({ message: 'Username or password invalid' });

    res.status(200).json({ token });
  }
}