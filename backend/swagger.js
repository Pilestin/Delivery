const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "DeliverOps API",
      version: "0.1.0"
    }
  },
  apis: ["./routes/*.js"], // <-- route'lardaki anotasyonları okuyacak
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger UI running ⇒ http://localhost:4000/docs");
};

module.exports = swaggerDocs;
