const Joi = require("joi");

module.exports = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
});
