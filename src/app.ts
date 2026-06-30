import express, { Application } from "express";
import connectDb, { sequelize } from "./dbs/sequelize.js";
import loadRoutes from "./routes/mainRouter.js";

const app: Application = express();
app.use(express.json());

await connectDb();

await loadRoutes(app);
console.log(sequelize.models);
