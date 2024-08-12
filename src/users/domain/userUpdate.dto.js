const Joi = require("joi");
const validateIdExistence = require("../../_shared/middlewares/validate/idExist.validate");
const RoleService = require("../../roles/application/role.service");
const TestService = require("../../tests/application/test.service");

const roleMessage = "Role id not exist";
const testMessage = "Role id not exist";

module.exports = Joi.object({
  name: Joi.string().optional().min(3),
  email: Joi.string().optional().email(),
  password: Joi.string().optional().min(6),
  role: Joi.string()
    .optional()
    .length(24)
    .external(validateIdExistence(RoleService, roleMessage)),
  tests: Joi.array()
    .items(
      Joi.string()
        .length(24)
        .external(validateIdExistence(TestService, testMessage))
    )
    .optional(),
});
