const Joi = require("joi");
const validateIdExistence = require("../../_shared/middlewares/validate/idExist.validate");
const departmentService = require("../../departments/application/department.service");

const message = "Department id not exist";

module.exports = Joi.object({
  name: Joi.string().trim().required().example("Marketing"),
  department: Joi.string()
    .length(24)
    .external(validateIdExistence(departmentService, message))
    .required(),
});
