import { SQLMAPPING } from "../utils/sqlQueries";

export class AppRepository {
  static fetchResultOfAPollingUnit(pollUnitId) {
    return SQLMAPPING.FETCH_RESULT_OF_ONE_POLLING_UNIT(pollUnitId);
  }

  static fetchAllStates() {
    return SQLMAPPING.FETCH_ALL_STATES();
  }

  static fetchAllPollingUnits() {
    return SQLMAPPING.FETCH_ALL_POLLING_UNITS;
  }

  static fetchTotalResultOfUnitUnderLga(lgaId) {
    return SQLMAPPING.FETCH_SUMMED_TOTAL_RESULT_OF_POLLING_UNITS_UNDER_A_LG(
      lgaId
    );
  }

  static storeResultForPartyForAPollingUnit(data) {
    return SQLMAPPING.STORE_RESULT_FOR_PARTY_FOR_A_POLLING_UNIT(data);
  }
}
