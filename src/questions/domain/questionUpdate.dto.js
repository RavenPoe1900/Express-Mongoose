const Joi = require("joi");
const QuestionTypeEnum = require("../../_shared/enum/question.enum");

module.exports = Joi.object({
  content: Joi.string()
    .optional()
    .description("The content or text of the question"),
  type: Joi.string()
    .valid(
      QuestionTypeEnum.MULTIPLE_CHOICE,
      QuestionTypeEnum.TRUE_FALSE,
      QuestionTypeEnum.SHORT_ANSWER
    )
    .optional()
    .description("The type of the question"),
  options: Joi.array()
    .items(Joi.string())
    .optional()
    .description("The options for multiple-choice questions"),
  correctAnswer: Joi.string()
    .optional()
    .description("The correct answer for the question"),
});
