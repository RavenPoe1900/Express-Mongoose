const Joi = require("joi");
const RoleTypeEnum = require("../../_shared/enum/roles.enum");

module.exports = Joi.object({
  name: Joi.string()
    .valid(RoleTypeEnum.ADMIN, RoleTypeEnum.MANAGER, RoleTypeEnum.EMPLOYEE)
    .required()
    .messages({
      "string.empty": "Name is required",
      "any.only": `Name must be one of ${RoleTypeEnum.ADMIN}, ${RoleTypeEnum.MANAGER}, ${RoleTypeEnum.EMPLOYEE}`,
    }),
});
