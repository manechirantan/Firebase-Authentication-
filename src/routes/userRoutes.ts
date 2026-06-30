import verify from "../middleware/middleware.js";
import express from "express";
import {
  SaveUserDb,
  SeeUserDb,
  UpdateUserDb,
} from "../controllers/usersController.js";


let userRoute = express.Router();

userRoute.use(verify);

userRoute.post("/saveuser", SaveUserDb.saveUserDb);
userRoute.patch("/users/update", UpdateUserDb.updateUserDb);
userRoute.get("/users", SeeUserDb.seeUserDb);


export default userRoute;
