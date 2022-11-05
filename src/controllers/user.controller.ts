import { Request, Response } from 'express';
import UserService from '../services/user.service';
import { validateUser } from '../services/validations';

export default class UserController {
  userService = new UserService();

  async create(req: Request, res: Response) {
    const { error, value } = validateUser(req.body);

    if (error) {
      const status = error.message.includes('is required') ? 400 : 422;
      
      return res.status(status).json({ message: error.message });
    }

    const token = await this.userService.create(value);
    res.status(201).json({ token });
  }
}