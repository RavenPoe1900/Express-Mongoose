const QuestionService = require("../application/question.service");

const selectOptions = "-responses";

exports.createQuestion = async (req, res) => {
  const result = await QuestionService.create(req.body, [], selectOptions);
  res.status(result.status).json(result);
};

exports.getAllQuestions = async (req, res) => {
  const { page, limit, filter } = req.query;
  const result = await QuestionService.findAll(
    page + 1,
    limit,
    filter,
    [],
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.getQuestionById = async (req, res) => {
  const result = await QuestionService.findById(
    req.params.id,
    [],
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.updateQuestion = async (req, res) => {
  const result = await QuestionService.updateById(
    req.params.id,
    req.body,
    [],
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.softDeleteQuestion = async (req, res) => {
  const result = await QuestionService.softDeleteById(
    req.params.id,
    [],
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.deleteQuestion = async (req, res) => {
  const result = await QuestionService.deleteById(
    req.params.id,
    [],
    selectOptions
  );
  res.status(result.status).json(result);
};
