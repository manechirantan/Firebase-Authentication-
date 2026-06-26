import express from "express";
import tokenRouter from "../routes/makeCustomTokenRoutes.js";
import userRoute from "../routes/saveLoginUserInDbRoutes.js";
export default async function loadRoutes(app) {
    app.use(express());
    app.use("/", tokenRouter);
    app.use("/", userRoute);
    app.listen(3000, () => {
        console.log("server started");
    });
}
