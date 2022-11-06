/* eslint-disable import/no-cycle */
import winston from "winston";

const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json((info) => {
    if (typeof info.message === "string") {
      return `${info.timestamp} ${info.level}: ${info.message}`;
    }
    return `${info.timestamp} ${info.level}: {message: ${info.message.responseMessage}, url: ${info.message.url}, code: ${info.message.statusCode}, clientInfo: ${info.message.clientInfo}}`;
  })
);

const logger = winston.createLogger({
  format: logFormat,
  transports: [
    new winston.transports.Console({
      level: "info",
    }),
  ],
});

export default logger;
