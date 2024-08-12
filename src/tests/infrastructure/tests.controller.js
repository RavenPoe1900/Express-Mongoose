const TestService = require("../application/test.service");
const testPopulate = require("../domain/test.populate");

const selectOptions = "-evaluations -questions -users";

exports.createTest = async (req, res) => {
  const result = await TestService.createOrUpdateTest(req.body, testPopulate, selectOptions);
  res.status(result.status).json(result);
};

exports.getAllTests = async (req, res) => {
  const { page, limit, filter } = req.query;
  const result = await TestService.findAll(
    page + 1,
    limit,
    filter,
    testPopulate,
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.getTestById = async (req, res) => {
  const result = await TestService.findById(req.params.id, testPopulate, selectOptions);
  res.status(result.status).json(result);
};

exports.updateTest = async (req, res) => {
  const result = await TestService.updateById(
    req.params.id,
    req.body,
    testPopulate,
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.softDeleteTest = async (req, res) => {
  const result = await TestService.softDeleteById(req.params.id, testPopulate, selectOptions);
  res.status(result.status).json(result);
};

exports.deleteTest = async (req, res) => {
  const result = await TestService.deleteById(req.params.id, testPopulate, selectOptions);
  res.status(result.status).json(result);
};
