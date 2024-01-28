const Joi = require('joi');
const PERMIT_TYPE = require("../../enums/permit_type");

module.exports = Joi.object({
  userId: Joi.string().required(),
  permit_type: Joi.string().valid(...Object.values(PERMIT_TYPE)).required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
  reason: Joi.string().required(),
  proof: Joi.string().required(),
})
