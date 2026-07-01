import { Request, Response, NextFunction } from "express";
import User from "../models/newUser.js";
import Company from "../models/companyModel.js";
import { getauth } from "../config/firebaseAdminSdk.js";

declare global {
  namespace Express {
    interface Request {
      token: string;
    }
  }
}

async function locationMid(req: Request, res: Response, next: NextFunction) {
  let uid = req.user.uid;
  let user = await User.findOne({
    where: {
      uid,
    },
  });

  if (!user) {
    return res.json({
      message: "User not found",
    });
  }

  let Ownerid = user.id;

  let companyId = Number(req.user.companyId);

  let company = await Company.findOne({
    where: { id: companyId, Ownerid },
  });

  if (!company) {
    return res.send({
      message: "Company not found",
    });
  }

  let locationId = req.params;

  let token = await getauth.createCustomToken(req.user.uid, {
    id: Ownerid,
    companyId,
    locationId: locationId,
  });
  req.token = token;
  next();
}
