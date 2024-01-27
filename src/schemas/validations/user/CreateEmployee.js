const Joi = require('joi');
const EMPLOYEE_TYPE = require("../../enums/employee");
const DEPARTEMENT = require("../../enums/departement");

module.exports = Joi.object({
  userId: Joi.string().required(),
  employee_type: Joi.string().valid(...Object.values(EMPLOYEE_TYPE)).required(),
  departement: Joi.string().valid(...Object.values(DEPARTEMENT)).required(),
});
