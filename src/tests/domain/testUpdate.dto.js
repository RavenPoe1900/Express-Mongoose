const Joi = require("joi");
const validateIdExistence = require("../../_shared/middlewares/validate/idExist.validate");
const userService = require("../../users/application/user.service");

const userMessage = "User id not exist";

module.exports = Joi.object({
  name: Joi.string().optional().description("The name of the test"),
  area: Joi.string().length(24).optional().description("The area associated with this test"),
  users: Joi.array()
    .items(
      Joi.string()
        .length(24)
        .external(validateIdExistence(userService, userMessage))
        .required()
    )
    .unique()
    .optional()
    .description("The array of user IDs associated with this test"),
});
