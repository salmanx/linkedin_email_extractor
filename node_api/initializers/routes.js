const indexRouter = require("../app/controller/index");

module.exports = (app) => {
  app.use("/api/v1", indexRouter);
};
