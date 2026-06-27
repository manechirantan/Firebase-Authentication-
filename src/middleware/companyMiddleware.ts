import { getauth } from "../config/firebaseAdminSdk.js";
import { Request, Response, NextFunction } from "express";

export default async function companyMid(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let id = req.params.id;

  let token = await getauth.setCustomUserClaims(req.user.uid, {
    companyId: id,
  });
  console.log(token);
  next();
}
