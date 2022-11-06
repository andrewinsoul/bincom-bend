const pad = (n) => (n < 10 ? `0${n}` : n);

export const SQLMAPPING = {
  FETCH_ALL_POLLING_UNITS: `SELECT pu.uniqueid, pu.polling_unit_number, pu.polling_unit_name, pu.polling_unit_description, lga.lga_name, lga.lga_description FROM polling_unit AS pu JOIN lga ON pu.lga_id = lga.lga_id`,
  FETCH_RESULT_OF_ONE_POLLING_UNIT: (polUnitId) =>
    `SELECT * FROM announced_pu_results WHERE polling_unit_uniqueid = ${polUnitId}`,
  FETCH_ALL_STATES: () => `SELECT * FROM states`,
  FETCH_ALL_LOCAL_GOVT_OF_A_STATE: (stateId) =>
    `SELECT * FROM lga WHERE state_id = ${stateId}`,
  FETCH_SUMMED_TOTAL_RESULT_OF_POLLING_UNITS_UNDER_A_LG: (lgaId) => `
    SELECT SUM(apr.party_score) AS totalResult FROM polling_unit 
    AS pu JOIN announced_pu_results AS apr ON  
    pu.uniqueid=apr.polling_unit_uniqueid WHERE pu.lga_id=${lgaId};
    `,
  STORE_RESULT_FOR_PARTY_FOR_A_POLLING_UNIT: (
    data
  ) => `INSERT INTO announced_pu_results (polling_unit_uniqueid,              party_abbreviation, party_score, entered_by_user, date_entered, user_ip_address
    ) VALUES (${data.pollingUnitId}, '${data.partyAbbrev}', ${data.partyScore},
        '${data.user}', '${new Date().getFullYear()}-${pad(
    new Date().getMonth() + 1
  )}-${pad(new Date().getDate())} ${pad(new Date().getHours())}:${pad(
    new Date().getMinutes()
  )}:${pad(new Date().getSeconds())}', '${data.userIp}' 
        )`,
};
