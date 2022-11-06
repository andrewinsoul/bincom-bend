import IP from "ip";
import ServerResponses from "../utils/serverResponses";
import { AppServices } from "../services/";
import { RESPONSE_CODES } from "../utils/constants";

export class AppControllers {
  static async fetchResultOfAPollingUnit(req, res) {
    try {
      const { pollUnitId } = req.query;
      if (!pollUnitId) {
        return ServerResponses.badRequest(
          req,
          res,
          RESPONSE_CODES.BAD_REQUEST,
          "pollUnitId query param is required"
        );
      }
      const dbRes = await AppServices.fetchResultOfAPollingUnit(pollUnitId);
      return ServerResponses.successOk(
        res,
        RESPONSE_CODES.SUCCESS,
        "data successfully fetched",
        dbRes.rows
      );
    } catch (error) {
      return ServerResponses.serverError(
        req,
        res,
        RESPONSE_CODES.UNKNOWN_ERROR,
        error.message
      );
    }
  }

  static async fetchLocalGovtOfAState(req, res) {
    try {
      const { stateId } = req.query;
      if (!stateId) {
        return ServerResponses.badRequest(
          req,
          res,
          RESPONSE_CODES.BAD_REQUEST,
          "stateId query param is required"
        );
      }
      const dbRes = await AppServices.fetchAllLocalGovtOfAState(stateId);
      return ServerResponses.successOk(
        res,
        RESPONSE_CODES.SUCCESS,
        "data successfully fetched",
        dbRes.rows
      );
    } catch (error) {
      return ServerResponses.serverError(
        req,
        res,
        RESPONSE_CODES.UNKNOWN_ERROR,
        error.message
      );
    }
  }

  static async fetchAllPollingUnits(req, res) {
    try {
      const dbRes = await AppServices.fetchAllPollingUnits();
      return ServerResponses.successOk(
        res,
        RESPONSE_CODES.SUCCESS,
        "data successfully fetched",
        dbRes.rows
      );
    } catch (error) {
      return ServerResponses.serverError(
        req,
        res,
        RESPONSE_CODES.UNKNOWN_ERROR,
        error.message
      );
    }
  }

  static async fetchAllStates(req, res) {
    try {
      const dbRes = await AppServices.fetchAllStates();
      return ServerResponses.successOk(
        res,
        RESPONSE_CODES.SUCCESS,
        "data successfully fetched",
        dbRes.rows
      );
    } catch (error) {
      return ServerResponses.serverError(
        req,
        res,
        RESPONSE_CODES.UNKNOWN_ERROR,
        error.message
      );
    }
  }

  static async fetchSummedTotalOfPollingUnitUnderLga(req, res) {
    try {
      const { lgaId } = req.query;
      if (!lgaId) {
        return ServerResponses.badRequest(
          req,
          res,
          RESPONSE_CODES.BAD_REQUEST,
          "lgaId query param is required"
        );
      }
      const dbRes = await AppServices.fetchTotalResultOfUnitUnderLga(lgaId);
      return ServerResponses.successOk(
        res,
        RESPONSE_CODES.SUCCESS,
        "data successfully fetched",
        {
          total: dbRes.rows[0].totalresult || 0,
        }
      );
    } catch (error) {
      return ServerResponses.serverError(
        req,
        res,
        RESPONSE_CODES.UNKNOWN_ERROR,
        error.message
      );
    }
  }

  static async storeResultForPartyForAPollingUnit(req, res) {
    try {
      const { pollingUnitId, partyAbbrev, partyScore, user } = req.body;
      if (!pollingUnitId || !partyScore || !partyAbbrev || !user) {
        return ServerResponses.badRequest(
          req,
          res,
          RESPONSE_CODES.BAD_REQUEST,
          "pollingUnitId, partyAbbrev, partyScore and user are all required fields"
        );
      }
      if (isNaN(Number(partyScore)) || isNaN(Number(pollingUnitId))) {
        return ServerResponses.badRequest(
          req,
          res,
          RESPONSE_CODES.BAD_REQUEST,
          "The values of pollingUnitId and partyScore must be a number"
        );
      }
      await AppServices.storeResultForPartyForAPollingUnit({
        ...req.body,
        userIp: IP.address(),
      });
      return ServerResponses.successOk(
        res,
        RESPONSE_CODES.SUCCESS,
        "data successfully inserted",
        { ...req.body, userIp: IP.address() },
        201,
        RESPONSE_CODES.CREATED
      );
    } catch (error) {
      return ServerResponses.serverError(
        req,
        res,
        RESPONSE_CODES.UNKNOWN_ERROR,
        error.message
      );
    }
  }
}
