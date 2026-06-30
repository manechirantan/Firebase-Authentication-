import { locationComDb } from "../controllers/locationContoller.js";
import verify from "../middleware/middleware.js";
import express from "express";

let locationRouter = express.Router();

locationRouter.use(verify);

locationRouter.post(
  "/users/selectcompany/location",
  locationComDb.locationComDb,
);

export default locationRouter;
