import verify from "../middleware/middleware.js";
import SaveUserDb from "../controllers/saveLoginUserInDbController.js";
import UpdateUserDb from "../controllers/updateUserController.js";
import SeeUserDb from "../controllers/getUsersController.js";
import companyMid from "../middleware/companyMiddleware.js";
import SeeCompanyDb from "../controllers/selectCompanyContoller.js";
import CreateCompanyDb from "../controllers/createCompanyController.js";
import express from "express";

let userRoute = express.Router();

userRoute.use(verify);

userRoute.post("/saveuser", SaveUserDb.saveUserDb);
userRoute.post("/users/:id", UpdateUserDb.updateUserDb);
userRoute.post("/users/createcom/:id", CreateCompanyDb.createCompanyDb);
userRoute.get("/users", SeeUserDb.seeUserDb);
userRoute.post(
  "/users/selectcompany/:uid/:id",
  companyMid,
  SeeCompanyDb.seeCompanyDb,
);

export default userRoute;
