import Joi, { ObjectSchema } from 'joi';
import { GetUser, UpdateUser } from '../protocols/user.ts';

const createUserSchema: ObjectSchema<GetUser> = Joi.object({
  name: Joi.string()
    .required()
    .min(3),
  email: Joi.string()
    .email()
    .required(),
  password: Joi.string()
    .required()
    .min(6),
  permissionLevel: Joi.string()
    .valid('user', 'admin', 'visitor')
});

const updateUserSchema: ObjectSchema<UpdateUser> = Joi.object({
  name: Joi.string()
    .required()
    .min(3),
  email: Joi.string()
    .email()
    .required(),
  permissionLevel: Joi.string()
    .required()
    .valid('user', 'admin', 'visitor')
});

export default {
  createUserSchema,
  updateUserSchema
};