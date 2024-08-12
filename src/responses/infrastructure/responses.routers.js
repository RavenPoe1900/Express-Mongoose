const express = require("express");
const responseController = require("./responses.controller");
const router = express.Router();
const responseDto = require("../domain/response.dto");
const updateResponseDto = require("../domain/responseUpdate.dto");
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
  validateExternalDto(responseDto),
  responseController.createResponse
);

router.get(
  "/",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateQueryDto(paginateDto),
  responseController.getAllResponses
);

router.get(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  responseController.getResponseById
);

router.put(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  validateExternalDto(updateResponseDto),
  responseController.updateResponse
);

router.delete(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  responseController.softDeleteResponse
);

module.exports = router;
