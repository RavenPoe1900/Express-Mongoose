const UserService = require("../application/user.service");
const userPopulate = require("../domain/user.populate");

const selectOptions = "-password -tests";

exports.createUser = async (req, res) => {
  const result = await UserService.create(
    req.body,
    userPopulate,
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.getAllUsers = async (req, res) => {
  const { page, limit, filter } = req.query;
  // const result = await UserService.findAll(page, limit, filter, userPopulate, selectOptions);
  const result = await UserService.getDepartmentReport(page);
  console.log(result);
  res.status(200).json(result);
};

exports.getUserById = async (req, res) => {
  const result = await UserService.findById(
    req.params.id,
    userPopulate,
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.updateUser = async (req, res) => {
  const result = await UserService.updateById(
    req.params.id,
    req.body,
    userPopulate
  );
  res.status(result.status).json(result);
};

exports.softDeleteUser = async (req, res) => {
  const result = await UserService.softDeleteById(
    req.params.id,
    userPopulate,
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.getEvaluationReportForEmployee = async (req, res) => {
  const result = await ReportService.getEvaluationReportForEmployee(
    req.params.userId
  );
  res.status(result.status).json(result);
};

exports.getDepartmentReport = async (req, res) => {
  const result = await ReportService.getDepartmentReport(
    req.params.departmentId
  );
  res.status(result.status).json(result);
};
