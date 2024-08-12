const express = require("express");
const evaluationController = require("./evaluations.controller");
const router = express.Router();
const evaluationDto = require("../domain/evaluation.dto");
const updateEvaluationDto = require("../domain/evaluationUpdate.dto");
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
  validateExternalDto(evaluationDto),
  evaluationController.createEvaluation
);

router.get(
  "/",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateQueryDto(paginateDto),
  evaluationController.getAllEvaluations
);

router.get(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  evaluationController.getEvaluationById
);

router.put(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  validateExternalDto(updateEvaluationDto),
  evaluationController.updateEvaluation
);

router.delete(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  evaluationController.softDeleteEvaluation
);

module.exports = router;
