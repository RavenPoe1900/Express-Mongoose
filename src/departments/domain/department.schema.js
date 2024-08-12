const mongoose = require("mongoose");
const baseSchema = require("../../_shared/db/baseScehma");

const departmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  areas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Area",
    },
  ],
});

departmentSchema.add(baseSchema);

module.exports = mongoose.model("Department", departmentSchema);
