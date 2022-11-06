import pg from "pg";
import dotenv from "dotenv";
import logger from "./utils/logger";

dotenv.config();

const config = new pg.Client(process.env.DB_URL);

(async () => {
  try {
    await config.connect();
    logger.info("database successfully connected");
  } catch (error) {
    logger.error(error);
  }
})();

export default config;
