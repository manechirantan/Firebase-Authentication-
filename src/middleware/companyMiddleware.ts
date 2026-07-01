import { getauth } from "../config/firebaseAdminSdk.js";
import { Request, Response, NextFunction } from "express";
import Company from "../models/companyModel.js";
import User from "../models/newUser.js";
import Location from "../models/locations.js";

interface Companyy {
  name: string;
  address: string;
  id: number;
  Ownerid: number;
}

interface Locationn {
  id: number;
  location: string;
}

declare global {
  namespace Express {
    interface Request {
      company: Companyy;
      location: Locationn[];
      token: string;
    }
  }
}

export default async function companyMid(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
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

    let companyId = Number(req.params.id);

    let company = await Company.findOne({
      where: { id: companyId, Ownerid },
    });

    if (!company) {
      return res.send({
        message: "Company not found",
      });
    }

    console.log(companyId, Ownerid);

    let locations = await Location.findAll({
      where: { companyId },
    });
    if (locations.length === 0) {
      return res.json({ message: "not location on this comapny id" });
    }

    if (locations.length === 1) {
      let token = await getauth.createCustomToken(req.user.uid, {
        companyId: companyId,
        locationId: locations[0].id,
        id: Ownerid,
      });
      req.token = token;
      console.log(req.token);
    } else {
      let token = await getauth.createCustomToken(req.user.uid, {
        companyId: companyId,
        id: Ownerid,
      });
      req.location = locations;
      req.token = token;
      console.log(req.token);
    }
    req.company = company;
    console.log(company);
    console.log(locations);
    next();
  } catch (error) {
    console.log(error);
  }
}
