const path = require("path");
const findRoutes = require("../service/findRote.service.js");
const routes = findRoutes(
  path.resolve(__dirname, "../../"),
  "infrastructure",
  ".routers.js"
);
const express = require('express');


function setupRoot(app) {
  const mainRouter = express.Router();

  routes.forEach((routePath) => {
    const route = require(routePath);
    const routeName = path.basename(routePath, ".routes.js").split(".")[0];
    mainRouter.use(`/${routeName}`, route);
  });

  app.use('/api', mainRouter)
}

module.exports = setupRoot;