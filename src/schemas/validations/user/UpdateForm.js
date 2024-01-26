const Joi = require('joi');

module.exports = Joi.object({
  id: Joi.number().integer().min(1),
  name: Joi.string().min(3).required(),
  role: Joi.string().min(3).required(),
  gender: Joi.string().min(3).required(),
  address: Joi.string().min(3).required(),
});
