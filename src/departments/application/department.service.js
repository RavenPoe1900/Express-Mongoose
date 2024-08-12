const BaseService = require("../../_shared/service/base.service.js");
const Department = require("../domain/department.schema.js");
class DepartmentService extends BaseService {
  constructor() {
    super(Department);
  }
}

module.exports = new DepartmentService();
