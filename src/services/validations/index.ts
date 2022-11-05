import Joi from 'joi';
import { ILogin, IProducts } from '../../interfaces';

export const validateLogin = (params: ILogin) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate(params);

  if (error) {
    return { type: 'error', message: error.message };
  }

  return { type: null, message: value };
};

export const validateProducts = (product: IProducts) => Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.required': '"name" is required',
    'string.min': '"name" length must be at least 3 characters long',
  }),
  amount: Joi.string().min(3).required().messages({
    'string.required': '"amount" is required',
    'string.min': '"amount" length must be at least 3 characters long',
  }),
}).validate(product);
