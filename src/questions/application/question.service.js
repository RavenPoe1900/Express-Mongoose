const BaseService = require("../../_shared/service/base.service.js");
const Question = require("../domain/question.schema.js");
class QuestionService extends BaseService {
  constructor() {
    super(Question);
  }
}

module.exports = new QuestionService();
