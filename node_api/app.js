const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./initializers/logger")(app);
require("./initializers/routes")(app);

const port = process.env.PORT || 8000;
app.listen(port, () => console.info(`Listening on port ${port}...`));

module.exports = app;
