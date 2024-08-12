const EvaluationService = require("../application/evaluation.service");

exports.createEvaluation = async (req, res) => {
  const result = await EvaluationService.create(req.body);
  res.status(result.status).json(result);
};

exports.getAllEvaluations = async (req, res) => {
  const { page, limit, filter } = req.query;
  const result = await EvaluationService.findAll(page+1, limit, filter);
  res.status(result.status).json(result);
};

exports.getEvaluationById = async (req, res) => {
  const result = await EvaluationService.findById(req.params.id);
  res.status(result.status).json(result);
};

exports.updateEvaluation = async (req, res) => {
  const result = await EvaluationService.updateById(
    req.params.id,
    req.body
  );
  res.status(result.status).json(result);
};

exports.softDeleteEvaluation = async (req, res) => {
  const result = await EvaluationService.softDeleteById(req.params.id);
  res.status(result.status).json(result);
};

exports.deleteEvaluation = async (req, res) => {
  const result = await EvaluationService.deleteById(req.params.id);
  res.status(result.status).json(result);
};
