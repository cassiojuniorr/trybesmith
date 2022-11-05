import { NextFunction, Request, Response } from 'express';

const midProduct = (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  if (name && typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }

  if (amount && typeof amount !== 'string') {
    return res.status(422).json({ message: '"amount" must be a string' });
  }

  next();
};

export default midProduct;