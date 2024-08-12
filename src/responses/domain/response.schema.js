const mongoose = require("mongoose");
const baseSchema = require("../../_shared/db/baseScehma");

const responseSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
    default: false,
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    required: true,
  },
  score: {
    type: Number,
    min: 1,
    max: 10,
    default: null,
    required: false,
  },
});

responseSchema.add(baseSchema);

module.exports = mongoose.model("Response", responseSchema);
