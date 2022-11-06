import logger from "../utils/logger";
import config from "../config";
import { AppRepository } from "../repositories";

/**
 * @description - lnitialize logger for base service class
 */
class BaseService {
  /** */
  constructor() {
    this.loggerUtil = logger;
  }
}

export class AppServices extends BaseService {
  static async fetchResultOfAPollingUnit(pollUnitId) {
    try {
      const sql = AppRepository.fetchResultOfAPollingUnit(pollUnitId);
      const res = await config.query(sql);
      return res;
    } catch (err) {
      new BaseService().loggerUtil.error(err.message);
      throw err;
    }
  }

  static async fetchAllStates() {
    try {
      const sql = AppRepository.fetchAllStates();
      const res = await config.query(sql);
      return res;
    } catch (err) {
      new BaseService().loggerUtil.error(err.message);
      throw err;
    }
  }

  static async fetchAllPollingUnits() {
    try {
      const sql = AppRepository.fetchAllPollingUnits();
      const res = await config.query(sql);
      return res;
    } catch (err) {
      new BaseService().loggerUtil.error(err.message);
      throw err;
    }
  }

  static async fetchTotalResultOfUnitUnderLga(lgaId) {
    try {
      const sql = AppRepository.fetchTotalResultOfUnitUnderLga(lgaId);
      const res = await config.query(sql);
      return res;
    } catch (err) {
      new BaseService().loggerUtil.error(err.message);
      throw err;
    }
  }

  static async storeResultForPartyForAPollingUnit(payload) {
    try {
      const sql = AppRepository.storeResultForPartyForAPollingUnit(payload);
      const res = await config.query(sql);
      return res;
    } catch (err) {
      new BaseService().loggerUtil.error(err.message);
      throw err;
    }
  }
}
