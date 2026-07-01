import LocationController from "../controllers/locationContoller.js";

import locationMid from "../middleware/locationMiddleware.js";
import verify from "../middleware/middleware.js";
import express from "express";

let locationRouter = express.Router();

locationRouter.use(verify);

locationRouter.post(
  "/users/selectcompany/addlocation",
  LocationController.locationCreateDb,
);

locationRouter.get(
  "/users/selectlocation/:id",
  locationMid,
  LocationController.locationSelectDb,
);

export default locationRouter;
