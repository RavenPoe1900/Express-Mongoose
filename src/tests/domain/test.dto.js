const Joi = require("joi");
const validateIdExistence = require("../../_shared/middlewares/validate/idExist.validate");
const userService = require("../../users/application/user.service");
const areaService = require("../../areas/application/area.service");

const userMessage = "User id not exist";
const areaMessage = "Area id not exist";

module.exports = Joi.object({
  name: Joi.string().required().description("The name of the test"),
  user: Joi.string()
    .length(24)
    .external(validateIdExistence(userService, userMessage))
    .required()
    .description("The user associated with this test"),
  area: Joi.string()
    .length(24)
    .external(validateIdExistence(areaService, areaMessage))
    .required()
    .description("The area associated with this test"),
});