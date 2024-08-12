const express = require("express");
const app = express();
const MongoDb = require("./_shared/db/mongoConnect.js");
const mongoDb = new MongoDb();
const cors = require("cors");
const { logger, printEndpoints } = require("./_shared/utils/logger.js");
const cookieParser = require("cookie-parser");
const errorHandler = require("./_shared/middlewares/errorHandle.middleware.js");
const config = require("./_shared/config/config.js");
const setupSwagger = require("./_shared/swagger/setup.swagger.js");
const setupRoot = require("./_shared/root/setup.root.js");
const {
  ensureEmployeeRole,
} = require("./_shared/dataInitializer/role.dataInitializer.js");
const jsonSyntaxErrorHandler = require("./_shared/middlewares/validate/json.validate.js");
const mongoSanitize = require("./_shared/middlewares/mongoSanitize.middleware.js");

const port = config.PORT;

app.locals.models = mongoDb.models;
app.use(cookieParser());
app.use(cors());
app.use(errorHandler);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(jsonSyntaxErrorHandler);
app.use(mongoSanitize);

async function init() {
  setupRoot(app);
  setupSwagger(app, port);
  printEndpoints(app);
  await mongoDb.connect();
  await ensureEmployeeRole();
  app.listen(port, () => {
    logger(`Server is running in port:${port}`);
  });
}

init();

module.exports = app;