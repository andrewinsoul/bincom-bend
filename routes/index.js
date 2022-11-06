import { Router } from "express";
import { RESPONSE_CODES, VERSION_URL } from "../utils/constants";
import ServerResponses from "../utils/serverResponses";
import { AppControllers } from "../controllers";

const v1Router = Router();

/**
 * @description simple welcome route
 * @returns {object} - object representing the welcome information
 */
v1Router.get(VERSION_URL.V1.prefix, (_, res) =>
  ServerResponses.successOk(
    res,
    RESPONSE_CODES.SUCCESS,
    `server up and running. This is version ${VERSION_URL.V1.versionNo}`
  )
);

v1Router
  .get(
    `${VERSION_URL.V1.prefix}/fetch/pollingUnit/result`,
    AppControllers.fetchResultOfAPollingUnit
  )
  .get(
    `${VERSION_URL.V1.prefix}/fetch/all/pollingUnit`,
    AppControllers.fetchAllPollingUnits
  )
  .get(
    `${VERSION_URL.V1.prefix}/fetch/all/states`,
    AppControllers.fetchAllStates
  )
  .get(
    `${VERSION_URL.V1.prefix}/fetch/sum/total/pollingUnit`,
    AppControllers.fetchSummedTotalOfPollingUnitUnderLga
  )
  .post(
    `${VERSION_URL.V1.prefix}/add/party/result/pollingUnit`,
    AppControllers.storeResultForPartyForAPollingUnit
  );

v1Router.all("*", (req, res) =>
  ServerResponses.notFound(
    req,
    res,
    RESPONSE_CODES.NOT_FOUND,
    "route does not exist"
  )
);

export default v1Router;
