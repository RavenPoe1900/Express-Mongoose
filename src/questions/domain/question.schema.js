const mongoose = require("mongoose");
const baseSchema = require("../../_shared/db/baseScehma");
const QuestionTypeEnum = require("../../_shared/enum/question.enum");

const questionSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    description: "The content or text of the question",
  },
  type: {
    type: String,
    enum: [
      QuestionTypeEnum.MULTIPLE_CHOICE,
      QuestionTypeEnum.TRUE_FALSE,
      QuestionTypeEnum.SHORT_ANSWER,
    ],
    required: true,
    description: "The type of the question",
  },
  options: [
    {
      type: String,
      description: "The options for multiple-choice questions",
    },
  ],
  correctAnswer: {
    type: String,
    description: "The correct answer for the question",
  },
  responses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Response" }],
});

questionSchema.add(baseSchema);

module.exports = mongoose.model("Question", questionSchema);
