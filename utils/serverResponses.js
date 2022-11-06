import { RESPONSE_CODES } from "./constants";
import logger from "./logger";

/**
 * @description class will implement functionalities for all server responses
 *
 * @class ServerResponses
 */
class ServerResponses {
  /**
   * @description - for success ok
   * @param {object} res the response object
   * @param {String} messageCode the message code that will be used in translation
   * @param {string} responseMessage The message to the client
   * @param {object} data the data to from the activity
   * @param {Number} statusCode the status code to be sent to user
   * @param {String} status the status of the event
   * @returns {object} returns response object with the necessary info
   */
  static successOk(
    res,
    messageCode,
    responseMessage,
    data = {},
    statusCode = 200,
    status = "success"
  ) {
    return res.status(statusCode).json({
      responseMessage,
      status,
      data,
      messageCode,
      responseCode: RESPONSE_CODES.SUCCESS,
    });
  }

  /**
   * @description - for bad request
   * @param {object} req the request object
   * @param {object} res the response object
   * @param {String} messageCode the message code that will be used in translation
   * @param {string} responseMessage The message to the client
   * @param {object} data the data to from the activity
   * @param {Number} statusCode the status code to be sent to user
   * @param {String} status the status of the event,
   * @returns {object} returns response object with the necessary info
   */
  static badRequest(
    req,
    res,
    messageCode,
    responseMessage,
    data = null,
    statusCode = 400,
    status = "error"
  ) {
    ServerResponses.logData(req, responseMessage, statusCode, status);
    return res.status(statusCode).json({
      data,
      status,
      responseMessage,
      messageCode,
      responseCode: RESPONSE_CODES.FAILED,
    });
  }

  /**
   * @description - for not found
   * @param {object} req the request object
   * @param {object} res the response object
   * @param {String} messageCode the message code that will be used in translation
   * @param {string} responseMessage The message to the client
   * @param {object} data the data to from the activity
   * @param {Number} statusCode the status code to be sent to user
   * @param {String} status the status of the event
   * @returns {object} returns response object with the necessary info
   */
  static notFound(
    req,
    res,
    messageCode,
    responseMessage,
    data = null,
    statusCode = 404,
    status = "error"
  ) {
    ServerResponses.logData(req, responseMessage, statusCode, status);
    return res.status(statusCode).json({
      responseMessage,
      data,
      statusCode,
      messageCode,
      responseCode: RESPONSE_CODES.NOT_FOUND,
    });
  }

  /**
   * @description - for internal server error
   * @param {object} req the request object
   * @param {object} res the response object
   * @param {String} messageCode the message code that will be used in translation
   * @param {string} responseMessage The message to the client
   * @param {object} data the data to from the activity
   * @param {Number} statusCode the status code to be sent to user
   * @param {String} status the status of the event
   * @returns {object} returns response object with the necessary info
   */
  static serverError(
    req,
    res,
    messageCode,
    responseMessage = "Something went wrong, try again",
    data = null,
    statusCode = 500,
    status = "error"
  ) {
    ServerResponses.logData(req, responseMessage, statusCode, status);
    return res.status(statusCode).json({
      responseMessage,
      messageCode,
      statusCode,
      data,
      responseCode: RESPONSE_CODES.UNKNOWN_ERROR,
    });
  }

  /**
   * @description - for formating response
   * @param {object} req the request object
   * @param {string} responseMessage The message to the client
   * @param {Number} statusCode the status code to be sent to user
   * @param {String} status the status of the event
   * @param {boolean} logResponse bool to log the response or not
   * @returns {object} returns response object with the necessary info
   */
  static logData(
    req,
    responseMessage,
    statusCode = 400,
    status = "error",
    logResponse = true
  ) {
    if (logResponse) {
      logger[status === "error" ? "error" : "info"]({
        level: status,
        method: req.method,
        url: req.originalUrl,
        clientInfo: req.headers["user-agent"],
        responseMessage,
        statusCode,
      });
    }
  }
}

export default ServerResponses;
