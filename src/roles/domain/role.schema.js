const mongoose = require("mongoose");
const RoleTypeEnum = require("../../_shared/enum/roles.enum");
const baseSchema = require("../../_shared/db/baseScehma");

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: [RoleTypeEnum.ADMIN, RoleTypeEnum.MANAGER, RoleTypeEnum.EMPLOYEE],
    required: true,
    unique: true,
  },
});

roleSchema.add(baseSchema);
module.exports = mongoose.model("Role", roleSchema);
