const BaseService = require("../../_shared/service/base.service.js");
const Response = require("../domain/response.schema.js");
class ResponseService extends BaseService {
  constructor() {
    super(Response);
  }

  async findByEmail(email, includePassword = false) {
    const query = this.model.findOne({ email, deletedAt: null });
    if (includePassword) {
      query.select("+password");
    }
    return query.exec();
  }
}

module.exports = new ResponseService();
