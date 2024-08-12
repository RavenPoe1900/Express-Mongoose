const mongoose = require("mongoose");
const baseSchema = require("../../_shared/db/baseScehma");

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    description: "The name of the test",
    unique: true,
  },
  area: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Area",
    required: true,
    description: "The area associated with this test",
  },
  evaluations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Evaluation" }],
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

testSchema.add(baseSchema);

module.exports = mongoose.model("Test", testSchema);
