const express = require("express");
const questionController = require("./questions.controller");
const router = express.Router();
const questionDto = require("../domain/question.dto");
const updateQuestionDto = require("../domain/questionUpdate.dto");
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
  validateBodyDto(questionDto),
  questionController.createQuestion
);

router.get(
  "/",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateQueryDto(paginateDto),
  questionController.getAllQuestions
);

router.get(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  questionController.getQuestionById
);

router.put(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  validateBodyDto(updateQuestionDto),
  questionController.updateQuestion
);

router.delete(
  "/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  validateId,
  questionController.softDeleteQuestion
);

module.exports = router;
