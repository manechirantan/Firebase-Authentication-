import verify from "../middleware/middleware.js";
import express from "express";
import UserController from "../controllers/usersController.js";

let userRoute = express.Router();

userRoute.use(verify);

userRoute.post("/saveuser", UserController.saveUserDb);
userRoute.patch("/users/update", UserController.updateUserDb);
userRoute.get("/users", UserController.seeUserDb);

export default userRoute;
