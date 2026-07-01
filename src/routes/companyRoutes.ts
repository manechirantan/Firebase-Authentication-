import {
  SeeCompanyDb,
  CreateCompanyDb,
  UpdateCompanyDb,
} from "../controllers/companyController.js";

import express from "express";
import verify from "../middleware/middleware.js";
import companyMid from "../middleware/companyMiddleware.js";

let companyRouter = express.Router();
companyRouter.use(verify);

companyRouter.post("/users/createcom", CreateCompanyDb.createCompanyDb);

companyRouter.patch(
  "/users/selectcompany/update",
  UpdateCompanyDb.updateCompanyDb,
);

companyRouter.get(
  "/users/selectcompany/:id",
  companyMid,
  SeeCompanyDb.seeCompanyDb,
);

export default companyRouter;
