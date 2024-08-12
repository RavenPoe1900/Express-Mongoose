const Joi = require("joi");
const validateIdExistence = require("../../_shared/middlewares/validate/idExist.validate");
const QuestionService = require("../../questions/application/question.service");

const questionMessage = "Question id not exist";

module.exports = Joi.object({
  content: Joi.string().required().example("Paris"),
  isCorrect: Joi.boolean().required().example(true),
  question: Joi.string()
    .external(validateIdExistence(QuestionService, questionMessage))
    .required()
    .example("60d5f7c2d3e4b4c4f1d0e4e0"),
  score: Joi.number()
    .min(0)
    .max(10)
    .allow(null)
    .description(
      "The score for the response, must be between 0 and 10 or null"
    ),
});
