const mongoose = require("mongoose");
const baseSchema = require("../../_shared/db/baseScehma");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role", required: true },
  tests: [{ type: mongoose.Schema.Types.ObjectId, ref: "Test" }],
});

userSchema.add(baseSchema);

module.exports = mongoose.model("User", userSchema);
