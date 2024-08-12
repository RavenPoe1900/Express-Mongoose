const express = require("express");
const testController = require("./tests.controller");
const router = express.Router();
const testDto = require("../domain/test.dto");
const updateTestDto = require("../domain/testUpdate.dto");
const validateId = require("../../_shared/middlewares/validate/id.validate");
const authenticationMiddleware = require("../../_shared/middlewares/authentication.middleware");
const authorizationMiddleware = require("../../_shared/middlewares/authorization.middleware");
const RoleTypeEnum = require("../../_shared/enum/roles.enum");
const paginateDto = require("../../_shared/joi/paginateDto.joi");
const validateBodyDto = require("../../_shared/middlewares/validate/dtoBody.validate");
const validateQueryDto = require("../../_shared/middlewares/validate/dtoQuery.validate");
const validateExternalDto = require("../../_shared/middlewares/validate/dtoExternal.validate");


const middleAccess = [RoleTypeEnum.ADMIN, RoleTypeEnum.MANAGER];

router.post(
  "/",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateExternalDto(testDto),
  testController.createTest
);

router.get(
  "/",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateQueryDto(paginateDto),
  testController.getAllTests
);

router.get(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  testController.getTestById
);

router.put(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  validateExternalDto(updateTestDto),
  testController.updateTest
);

router.delete(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  testController.softDeleteTest
);

module.exports = router;
