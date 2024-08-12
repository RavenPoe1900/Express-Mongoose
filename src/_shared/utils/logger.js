const chalk = require("chalk");
let url = require("../config/config.js").URL;

const logger = (text, info = "INFO:", color = "green") => {
  const dateTime = new Date().toJSON().slice(0, 19).replace("T", ":");

  console.log(
    `${chalk.yellow(`[${dateTime}]`)} ${chalk[color](info)} ${chalk.bgBlue(
      text
    )}`
  );
};

const printEndpoints = (app) => {
  const getRoutePaths = (stack, basePath = "") => {
    const routes = [];
    stack.forEach((middleware) => {
      if (middleware.route) {
        const path = basePath + middleware.route.path;
        Object.keys(middleware.route.methods).forEach((method) => {
          routes.push({ method: method.toUpperCase(), path });
        });
      } else if (middleware.name === "router" && middleware.handle.stack) {
        const newBasePath = `${basePath}/` + middleware.regexp.source.split("\\/")[1];
        routes.push(...getRoutePaths(middleware.handle.stack, `${newBasePath}`));
      }
    });
    return routes;
  };

  const routes = getRoutePaths(app._router.stack);
  routes.forEach(({ method, path }) => {
    logger(`[RouterExplorer] Mapped {${path}, ${method}} route`);
  });
};

module.exports = { logger, printEndpoints };
