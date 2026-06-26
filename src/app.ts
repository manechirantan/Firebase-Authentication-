import { Application } from "express";
import express from "express";
import connectDb from "./dbs/sequelize.js";
import loadRoutes from "./routes/mainRouter.js";

let app: Application = express();

await connectDb();
await loadRoutes(app);
