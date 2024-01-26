const JoiDate = require('@joi/date');
const Joi = require('joi').extend(JoiDate);
const BaseFind = require('../BaseFind');

const FilterFind = BaseFind.keys({
  role: Joi.string().min(3),
});

module.exports = FilterFind;
