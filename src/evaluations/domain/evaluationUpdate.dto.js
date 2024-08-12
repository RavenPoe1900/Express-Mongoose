const Joi = require("joi");
const TypeTypeEnum = require("../../_shared/enum/type.enum");
const StateTypeEnum = require("../../_shared/enum/state.enum");
const validateIdExistence = require("../../_shared/middlewares/validate/idExist.validate");
const TestService = require("../../tests/application/test.service");

const message = "Test id not exist"

module.exports = Joi.object({
  period: Joi.string().pattern(/^\d{4}-(0[1-9]|1[0-2])$/),
  state: Joi.string()
    .optional()
    .valid(
      StateTypeEnum.PENDING,
      StateTypeEnum.COMPLETED,
      StateTypeEnum.CANCELLED
    ),
  type: Joi.string()
    .optional()
    .valid(TypeTypeEnum.PARTIAL, TypeTypeEnum.FINAL, TypeTypeEnum.TEST),
  score: Joi.number().integer().min(1).max(10).allow(null).optional(),
  test: Joi.string()
    .length(24)
    .external(validateIdExistence(TestService, message))
    .optional(),
});
