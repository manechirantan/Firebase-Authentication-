import { getauth } from "../config/firebaseAdminSdk.js";
import { Request, Response, NextFunction } from "express";
import Company from "../models/companyModel.js";

interface Companyy {
  name: string;
  address: string;
  id: number;
  Ownerid: number;
}

declare global {
  namespace Express {
    interface Request {
      company: Companyy;
      token: string;
    }
  }
}

export default async function companyMid(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  let id = req.params.id;
  let Ownerid = req.params.uid;

  let token = await getauth.createCustomToken(req.user.uid, {
    companyId: id,
    id: Ownerid,
  });

  let company = await Company.findOne({ where: { id, Ownerid } });
  if (!company) {
    return res.send({
      message: "Company not found",
    });
  }

  req.company = company;

  req.token = token;
  next();
}
