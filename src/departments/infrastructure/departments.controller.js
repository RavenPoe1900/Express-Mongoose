const DepartmentService = require("../application/department.service");

const selectOptions = " -areas";

exports.createDepartment = async (req, res) => {
  const result = await DepartmentService.create(req.body, [], selectOptions);
  res.status(result.status).json(result);
};

exports.getAllDepartments = async (req, res) => {
  const { page, limit, filter } = req.query;
  const result = await DepartmentService.findAll(
    page + 1,
    limit,
    filter,
    [],
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.getDepartmentById = async (req, res) => {
  const result = await DepartmentService.findById(
    req.params.id,
    [],
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.updateDepartment = async (req, res) => {
  const result = await DepartmentService.updateById(
    req.params.id,
    req.body,
    [],
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.softDeleteDepartment = async (req, res) => {
  const result = await DepartmentService.softDeleteById(
    req.params.id,
    [],
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.deleteDepartment = async (req, res) => {
  const result = await DepartmentService.deleteById(
    req.params.id,
    [],
    selectOptions
  );
  res.status(result.status).json(result);
};
