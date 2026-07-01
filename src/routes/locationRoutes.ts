import {
  locationComDb,
  LocationSelectDb,
} from "../controllers/locationContoller.js";

import locationMid from "../middleware/locationMiddleware.js";
import verify from "../middleware/middleware.js";
import express from "express";

let locationRouter = express.Router();

locationRouter.use(verify);

locationRouter.post(
  "/users/selectcompany/addlocation",
  locationComDb.locationComDb,
);

locationRouter.get(
  "/users/selectlocation/:id",
  locationMid,
  LocationSelectDb.locationSelectDb,
);

export default locationRouter;
