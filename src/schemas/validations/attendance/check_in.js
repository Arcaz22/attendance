const Joi = require('joi');

module.exports = Joi.object({
  userId: Joi.string().required(),
  check_in: Joi.string(),
});
