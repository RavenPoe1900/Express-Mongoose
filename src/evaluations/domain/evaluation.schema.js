const mongoose = require("mongoose");
const baseSchema = require("../../_shared/db/baseScehma");
const TypeTypeEnum = require("../../_shared/enum/type.enum");
const StateTypeEnum = require("../../_shared/enum/state.enum");

const evaluationSchema = new mongoose.Schema({
  period: {
    type: String, // Ej: "2024-01"
    required: true,
  },
  state: {
    type: String,
    enum: [
      StateTypeEnum.PENDING,
      StateTypeEnum.COMPLETED,
      StateTypeEnum.CANCELLED,
    ],
    required: true,
  },
  type: {
    type: String,
    enum: [TypeTypeEnum.PARTIAL, TypeTypeEnum.FINAL, TypeTypeEnum.TEST],
    required: true,
  },
  score: {
    type: Number,
    min: 1,
    max: 10,
    default: null,
    required: false,
  },
  test: { type: mongoose.Schema.Types.ObjectId, ref: "Test", required: true },
});

evaluationSchema.add(baseSchema);

module.exports = mongoose.model("Evaluation", evaluationSchema);
