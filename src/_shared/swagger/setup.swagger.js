const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const findRoutes = require("../service/findRote.service.js");

const routes = findRoutes(
  path.resolve(__dirname, "../../"),
  "domain",
  ".swagger.js"
);

function setupSwagger(app, port) {
  const swaggerOptions = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "My API",
        version: "1.0.0",
        description: "API documentation",
      },
      servers: [
        {
          url: `http://localhost:${port}`,
        },
      ],
    },
    apis: routes,
  };
  const specs = swaggerJsdoc(swaggerOptions);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
}

module.exports = setupSwagger;
