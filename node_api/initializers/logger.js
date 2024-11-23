const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf, errors } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} [${level.toUpperCase()}]: ${stack || message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(timestamp(), errors({ stack: true }), logFormat),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "logs/error.log", level: "error" }),
  ],
});

module.exports = (app) => {
  app.use((req, res, next) => {
    logger.info(
      `Incoming request: ${req.method} ${req.url} - Query: ${JSON.stringify(
        req.query
      )}  Body: ${JSON.stringify(req.body)}`
    );
    next();
  });
};
