import { Request, Response, NextFunction } from "express";
import { getauth } from "../config/firebaseAdminSdk.js";

interface User {
  uid: string;
  email?: string;
  name?: string;
  address?: string;
  companyId?: string;
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
    console.log(req.body);
    let tokenn = req.headers.authorization;
    let token = tokenn?.split(" ")[1];

    if (!token) {
      return res.json({ error: "not Authorised" });
    }

    const decoded = await getauth.verifyIdToken(token);

    req.user = decoded;

    next();
  } catch (error: any) {
    return res.json({ error });
  }
}
