import Joi from 'joi';
import { ILogin, IProducts, IUser } from '../../interfaces';

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

export const validateUser = (user: IUser) => Joi.object({
  username: Joi.string().min(3).required().messages({
    'string.required': '"username" is required',
    'string.min': '"username" length must be at least 3 characters long',
  }),
  classe: Joi.string().min(3).required().messages({
    'string.required': '"classe" is required',
    'string.min': '"classe" length must be at least 3 characters long',
  }),
  level: Joi.number().min(1).required().messages({
    'string.required': '"level" is required',
    'string.min': '"level" must be greater than or equal to 1',
  }),
  password: Joi.string().min(8).required().messages({
    'string.required': '"password" is required',
    'string.min': '"password" length must be at least 8 characters long',
  }),
}).validate(user);
