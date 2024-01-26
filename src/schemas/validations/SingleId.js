const joi = require('joi')

module.exports = joi.object({
    id: joi.string().min(1).required(),
    is_mobile: joi.boolean()
});
