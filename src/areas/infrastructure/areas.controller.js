const AreaService = require("../application/area.service");
const areaPopulate = require("../domain/area.populate");

const selectOptions = " -tests";

exports.createArea = async (req, res) => {
  const result = await AreaService.create(
    req.body,
    areaPopulate,
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.getAllAreas = async (req, res) => {
  const { page, limit, filter } = req.query;
  const result = await AreaService.findAll(
    page + 1,
    limit,
    filter,
    areaPopulate,
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.getAreaById = async (req, res) => {
  const result = await AreaService.findById(
    req.params.id,
    areaPopulate,
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.updateArea = async (req, res) => {
  const result = await AreaService.updateById(
    req.params.id,
    req.body,
    areaPopulate,
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.softDeleteArea = async (req, res) => {
  const result = await AreaService.softDeleteById(
    req.params.id,
    areaPopulate,
    selectOptions
  );
  res.status(result.status).json(result);
};

exports.deleteArea = async (req, res) => {
  const result = await AreaService.deleteById(
    req.params.id,
    areaPopulate,
    selectOptions
  );
  res.status(result.status).json(result);
};
