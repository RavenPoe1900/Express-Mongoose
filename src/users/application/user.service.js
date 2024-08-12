const BaseService = require("../../_shared/service/base.service.js");
const User = require("../domain/user.schema.js");
const Department = require("../../departments/domain/department.schema.js");
const mongoose = require("mongoose");

class UserService extends BaseService {
  constructor() {
    super(User);
  }

  async findByEmail(email, includePassword = false) {
    const query = this.model.findOne({ email, deletedAt: null });
    if (includePassword) {
      query.select("+password");
    }
    return query.exec();
  }
}

module.exports = new UserService();
