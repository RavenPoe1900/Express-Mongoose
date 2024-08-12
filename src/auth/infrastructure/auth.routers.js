const express = require("express");
const router = express.Router();
const authController = require("./auth.controller");
const authenticationMiddleware = require("../../_shared/middlewares/authentication.middleware");
const authDto = require("../domain/auth.dto");
const validateBodyDto = require("../../_shared/middlewares/validate/dtoBody.validate");

router.post("/register", validateBodyDto(authDto), authController.register);
router.post("/login", validateBodyDto(authDto), authController.login);
router.get("/me", authenticationMiddleware, authController.getUser);

module.exports = router;
