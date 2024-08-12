const express = require("express");
const reportController = require("./reports.controller");
const router = express.Router();
const authenticationMiddleware = require("../../_shared/middlewares/authentication.middleware");
const authorizationMiddleware = require("../../_shared/middlewares/authorization.middleware");
const RoleTypeEnum = require("../../_shared/enum/roles.enum");

const middleAccess = [RoleTypeEnum.ADMIN, RoleTypeEnum.MANAGER];

router.get(
  "/employee/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  reportController.getEvaluationReportForEmployee
);

router.get(
  "/department/:id",
  authenticationMiddleware,
  authorizationMiddleware(middleAccess),
  reportController.getDepartmentReport
);

module.exports = router;
