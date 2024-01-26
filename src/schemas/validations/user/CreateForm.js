const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email(),
  password: Joi.string().min(6).required(), 
  gender: Joi.string().min(3).required(),
  address: Joi.string().min(3).required(),
});
