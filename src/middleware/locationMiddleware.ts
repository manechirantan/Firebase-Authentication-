import { Request, Response, NextFunction } from "express";
import Location from "../models/locations.js";
import { getauth } from "../config/firebaseAdminSdk.js";

interface Locationn {
  id: number;
  location: string;
  companyId: number;
}

declare global {
  namespace Express {
    interface Request {
      location: Locationn;
    }
  }
}

async function locationMid(req: Request, res: Response, next: NextFunction) {
  let companyId = req.user.companyId;

  let location = await Location.findOne({
    where: {
      companyId,
    },
  });
  if (!location) {
    return;
  }
  let token = await getauth.createCustomToken(req.user.uid, {
    companyId,
    locationId: location.id,
  });
}
