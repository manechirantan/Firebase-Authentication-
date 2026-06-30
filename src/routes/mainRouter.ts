import { Application } from "express";

import tokenRouter from "../routes/makeCustomTokenRoutes.js";
import userRoute from "./userRoutes.js";
import companyRouter from "./companyRoutes.js";
import locationRouter from "./locationRoutes.js";

export default async function loadRoutes(app: Application) {
  app.use("/", tokenRouter);
  app.use("/", userRoute);
  app.use("/", companyRouter);
  app.use("/", locationRouter);
  app.listen(3000, () => {
    console.log("server started");
  });
}
