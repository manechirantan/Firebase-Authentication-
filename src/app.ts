import express, { Application } from "express";
import connectDb from "./dbs/sequelize.js";
import loadRoutes from "./routes/mainRouter.js";

const app: Application = express();
app.use(express.json());

await connectDb();

await loadRoutes(app);
