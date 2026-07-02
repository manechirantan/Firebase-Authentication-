import CompanyController from "../controllers/companyController.js";

import express from "express";
import verify from "../middleware/middleware.js";
import companyMid from "../middleware/companyMiddleware.js";

let companyRouter = express.Router();
companyRouter.use(verify);

companyRouter.post("/users/createcom", CompanyController.createCompanyDb);

companyRouter.patch(
  "/users/selectcompany/update",
  CompanyController.updateCompanyDb,
);

companyRouter.get(
  "/users/selectcompany/:id",
  companyMid,
  CompanyController.seeCompanyDb,
);

companyRouter.get("/users/seecompany", CompanyController.seeAllCompanyDb);

export default companyRouter;
