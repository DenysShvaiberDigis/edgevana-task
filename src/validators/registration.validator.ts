import Joi from 'joi';

import { REGEXP } from '@/helpers/regexp';

export const RegistrationValidator = Joi.object({
  email: Joi.string().regex(REGEXP.EMAIL).required().label('E-mail').messages({
    'string.empty': 'Field {{#label}} cannot be empty',
    'string.pattern.base': 'Invalid {{#label}} entered',
  }),

  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .label('Username')
    .messages({
      'string.alphanum': 'Only numbers and letters allowed',
      'string.empty': 'Field {{#label}} cannot be empty"',
      'string.min': '{{#label}} requires 3+ characters',
      'string.max': '{{#label}} limited to 30 characters',
    }),

  firstName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .label('First name')
    .messages({
      'string.alphanum': 'Only numbers and letters allowed',
      'string.empty': 'Field {{#label}} cannot be empty"',
      'string.min': '{{#label}} requires 3+ characters',
      'string.max': '{{#label}} limited to 30 characters',
    }),

  lastName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required()
    .label('Last name')
    .messages({
      'string.alphanum': 'Only numbers and letters allowed',
      'string.empty': 'Field {{#label}} cannot be empty"',
      'string.min': '{{#label}} requires 3+ characters',
      'string.max': '{{#label}} limited to 30 characters',
    }),

  password: Joi.string()
    .regex(REGEXP.PASSWORD)
    .required()
    .label('Password')
    .messages({
      'string.empty': 'Field {{#label}} cannot be empty"',
      'string.pattern.base': 'Invalid {{#label}} entered',
    }),

  agreeToTerms: Joi.boolean().required(),
});
