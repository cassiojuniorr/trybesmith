import { Request, Response } from 'express';
import UserService from '../services/user.service';

export default class UserController {
  userService = new UserService();

  async create(req: Request, res: Response) {
    const token = await this.userService.create(req.body);

    res.status(201).json({ token });
  }
}