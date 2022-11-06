import cors from "cors";
import dotenv from "dotenv";
import logger from "./utils/logger";
import express, { json, urlencoded } from "express";
import http from "http";
import appRouter from "./routes";

// using environmental variables
dotenv.config();
const { PORT } = process.env;

// App
const app = express();

// create a server instance
const server = http.createServer(app);

// Add cors
app.use(cors());

// Initializing bodyparser
app.use(json({ limit: "50mb" }));
app.use(urlencoded({ limit: "50mb", extended: true }));

// load all routes
app.use(appRouter);

server.listen(PORT);

logger.info(`Running on ${PORT}`);

export default app;
