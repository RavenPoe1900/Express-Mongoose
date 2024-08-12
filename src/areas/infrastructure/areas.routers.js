const express = require("express");
const areaController = require("./areas.controller");
const router = express.Router();
const areaDto = require("../domain/area.dto");
const updateAreaDto = require("../domain/areaUpdate.dto");
const validateId = require("../../_shared/middlewares/validate/id.validate");
const authenticationMiddleware = require("../../_shared/middlewares/authentication.middleware");
const authorizationMiddleware = require("../../_shared/middlewares/authorization.middleware");
const RoleTypeEnum = require("../../_shared/enum/roles.enum");
const paginateDto = require("../../_shared/joi/paginateDto.joi");
const validateQueryDto = require("../../_shared/middlewares/validate/dtoQuery.validate");
const validateExternalDto = require("../../_shared/middlewares/validate/dtoExternal.validate");

const middleAccess = [RoleTypeEnum.ADMIN, RoleTypeEnum.MANAGER];

router.post(
  "/",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateExternalDto(areaDto),
  areaController.createArea
);

router.get(
  "/",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateQueryDto(paginateDto),
  areaController.getAllAreas
);

router.get(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  areaController.getAreaById
);

router.put(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  validateExternalDto(updateAreaDto),
  areaController.updateArea
);

router.delete(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  areaController.softDeleteArea
);

module.exports = router;
