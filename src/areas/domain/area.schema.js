const mongoose = require("mongoose");
const baseSchema = require("../../_shared/db/baseScehma");

const areaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  tests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Test" }],
  department: { type: mongoose.Schema.Types.ObjectId, ref: "Department", required: true },
});

areaSchema.add(baseSchema);

module.exports = mongoose.model("Area", areaSchema);
