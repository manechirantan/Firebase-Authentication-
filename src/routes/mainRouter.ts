import { Application } from "express";

import tokenRouter from "../routes/makeCustomTokenRoutes.js";
import userRoute from "../routes/saveLoginUserInDbRoutes.js";

export default async function loadRoutes(app: Application) {
  app.use("/", tokenRouter);
  app.use("/", userRoute);
  app.listen(3000, () => {
    console.log("server started");
  });
}
