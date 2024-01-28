const Joi = require('joi');

module.exports = Joi.object({
  userId: Joi.string().required(),
  permitId: Joi.string().required(),
  statusApproval: Joi.string().valid().required(),
});
