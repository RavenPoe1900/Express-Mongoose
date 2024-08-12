const express = require("express");
const departmentController = require("./departments.controller");
const router = express.Router();
const departmentDto = require("../domain/department.dto");
const updateDepartmentDto = require("../domain/departmentUpdate.dto");
const validateId = require("../../_shared/middlewares/validate/id.validate");
const authenticationMiddleware = require("../../_shared/middlewares/authentication.middleware");
const authorizationMiddleware = require("../../_shared/middlewares/authorization.middleware");
const RoleTypeEnum = require("../../_shared/enum/roles.enum");
const paginateDto = require("../../_shared/joi/paginateDto.joi");
const validateBodyDto = require("../../_shared/middlewares/validate/dtoBody.validate");
const validateQueryDto = require("../../_shared/middlewares/validate/dtoQuery.validate");

const middleAccess = [RoleTypeEnum.ADMIN, RoleTypeEnum.MANAGER];

router.post(
  "/",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateBodyDto(departmentDto),
  departmentController.createDepartment
);

router.get(
  "/",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateQueryDto(paginateDto),
  departmentController.getAllDepartments
);

router.get(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  departmentController.getDepartmentById
);

router.put(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  validateBodyDto(updateDepartmentDto),
  departmentController.updateDepartment
);

router.delete(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  departmentController.softDeleteDepartment
);

module.exports = router;
