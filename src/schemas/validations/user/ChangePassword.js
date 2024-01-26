const Joi = require('joi');

module.exports = Joi.object({
  old_password: Joi.string().min(3).required(),
  new_password: Joi.string().min(3).required(),
  confirm_password: Joi.string().min(3).required(),
});
