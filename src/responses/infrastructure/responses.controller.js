const ResponseService = require("../application/response.service");
const responsePopulate = require("../domain/response.populate");

exports.createResponse = async (req, res) => {
  const result = await ResponseService.create(req.body, responsePopulate);
  res.status(result.status).json(result);
};

exports.getAllResponses = async (req, res) => {
  const { page, limit, filter } = req.query;
  const result = await ResponseService.findAll(
    page + 1,
    limit,
    filter,
    responsePopulate
  );
  res.status(result.status).json(result);
};

exports.getResponseById = async (req, res) => {
  const result = await ResponseService.findById(
    req.params.id,
    responsePopulate
  );
  res.status(result.status).json(result);
};

exports.updateResponse = async (req, res) => {
  const result = await ResponseService.updateById(
    req.params.id,
    req.body,
    responsePopulate
  );
  res.status(result.status).json(result);
};

exports.softDeleteResponse = async (req, res) => {
  const result = await ResponseService.softDeleteById(
    req.params.id,
    responsePopulate
  );
  res.status(result.status).json(result);
};

exports.deleteResponse = async (req, res) => {
  const result = await ResponseService.deleteById(
    req.params.id,
    responsePopulate
  );
  res.status(result.status).json(result);
};
