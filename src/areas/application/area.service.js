const BaseService = require("../../_shared/service/base.service.js");
const Area = require("../domain/area.schema.js");
class AreaService extends BaseService {
  constructor() {
    super(Area);
  }
}

module.exports = new AreaService();
