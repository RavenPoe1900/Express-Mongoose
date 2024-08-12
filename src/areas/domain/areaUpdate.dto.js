const Joi = require("joi");
const validateIdExistence = require("../../_shared/middlewares/validate/idExist.validate");
const departmentService = require("../../tests/application/test.service");

const message = "Department id not exist";

module.exports = Joi.object({
  name: Joi.string().trim().optional().example("Marketing"),
  department: Joi.string()
    .length(24)
    .external(validateIdExistence(departmentService, message))
    .optional(),
});
