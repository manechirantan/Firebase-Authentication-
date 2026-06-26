import verify from "../middleware/middleware.js";
import SaveUserDb from "../controllers/saveLoginUserInDbController.js";
import SeeUserDb from "../controllers/getUsersController.js";
import express from "express";

let userRoute = express.Router();

userRoute.post("/saveuser", verify, SaveUserDb.saveUserDb);
userRoute.get("/users", verify, SeeUserDb.seeUserDb);

export default userRoute;
