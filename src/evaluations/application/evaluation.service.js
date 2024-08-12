const BaseService = require("../../_shared/service/base.service.js");
const Evaluation = require("../domain/evaluation.schema.js");
class EvaluationService extends BaseService {
  constructor() {
    super(Evaluation);
  }
}

module.exports = new EvaluationService();
