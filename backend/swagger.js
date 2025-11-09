const fs = require("fs");
const yaml = require("js-yaml");
const swaggerUi = require("swagger-ui-express");

const swaggerDocs = (app) => {
  const swaggerDocument = yaml.load(fs.readFileSync("./swagger.yaml", "utf8"));
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  console.log("Swagger UI running ⇒ http://localhost:4000/docs");
};

module.exports = swaggerDocs;
