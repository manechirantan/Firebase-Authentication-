import CustomTokenController from "../controllers/makeCustomTokenController.js";
import express from "express";

let tokenRouter = express.Router();

tokenRouter.post("/customToken/:uid", CustomTokenController.token);
export default tokenRouter;
