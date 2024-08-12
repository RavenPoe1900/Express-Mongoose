const BaseService = require("../../_shared/service/base.service.js");
const Role = require("../domain/role.schema.js");
class RoleService extends BaseService {
  constructor() {
    super(Role);
  }
}

module.exports = new RoleService();
