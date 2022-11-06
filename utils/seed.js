import path from "path";
import fs from "fs";
import config from "../config";
import logger from "./logger";

const dir = path.join(__dirname, "./seed.sql");
const sql = fs.readFileSync(dir).toString();

(async () => {
  try {
    await config.query(sql);
    logger.info("db successfully seeded");
    process.exit(0);
  } catch (err) {
    logger.error(err);
    process.exit(1);
  }
})();
