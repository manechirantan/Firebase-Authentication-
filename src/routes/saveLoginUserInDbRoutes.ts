import verify from "../middleware/middleware.js";
import SaveUserDb from "../controllers/saveLoginUserInDbController.js";
import UpdateUserDb from "../controllers/updateUserController.js";
import SeeUserDb from "../controllers/getUsersController.js";
import companyMid from "../middleware/companyMiddleware.js";
import SeeCompanyDb from "../controllers/selectCompanyContoller.js";
import CreateCompanyDb from "../controllers/createCompanyController.js";
import UpdateCompanyDb from "../controllers/updateCompanyController.js";
import locationComDb from "../controllers/addLocationToCompanyContoller.js";
import express from "express";

let userRoute = express.Router();

userRoute.use(verify);

userRoute.post("/saveuser", SaveUserDb.saveUserDb);
userRoute.patch("/users/update", UpdateUserDb.updateUserDb);
userRoute.post("/users/createcom/:id", CreateCompanyDb.createCompanyDb);

userRoute.get("/users", SeeUserDb.seeUserDb);
userRoute.patch("/users/selectcompany/update", UpdateCompanyDb.updateCompanyDb);

userRoute.get(
  "/users/selectcompany/:uid/:id",
  companyMid,
  SeeCompanyDb.seeCompanyDb,
);

userRoute.post("/users/selectcompany/location", locationComDb.locationComDb);

export default userRoute;
