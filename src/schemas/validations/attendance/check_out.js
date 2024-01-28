const Joi = require('joi');

module.exports = Joi.object({
  check_in: Joi.string(),
  check_out: Joi.string(),
});
