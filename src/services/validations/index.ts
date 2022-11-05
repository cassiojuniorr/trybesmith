import Joi from 'joi';
import { ILogin } from '../../interfaces';

const validateLogin = (params: ILogin) => {
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

export default validateLogin;
