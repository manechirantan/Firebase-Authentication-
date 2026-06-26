import express from "express";
import connectDb from "./dbs/sequelize.js";
import loadRoutes from "./routes/mainRouter.js";
let app = express();
await connectDb();
await loadRoutes(app);
