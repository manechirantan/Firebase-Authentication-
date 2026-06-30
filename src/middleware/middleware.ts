import { Request, Response, NextFunction } from "express";
import { getauth } from "../config/firebaseAdminSdk.js";

interface User {
  uid: string;
  email?: string;
  name?: string;
  address?: string;
  companyId?: string;
  id?: string;
  locationId?: string;
}

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

export default async function verify(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    let tokenn = req.headers.authorization;
    let token = tokenn?.split(" ")[1];

    if (!token) {
      return res.json({ error: "Not Authorised" });
    }

    const decoded = await getauth.verifyIdToken(token);

    req.user = decoded;
    // console.log(req.user);
    next();
  } catch (error: any) {
    return res.json({ message: "not authorised" });
  }
}
