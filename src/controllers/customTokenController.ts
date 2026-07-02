import CustomToken from "../services/customTokenService.js";
import { Request, Response } from "express";

export default class CustomTokenController {
  static async token(req: Request, res: Response) {
    try {
      let { uid } = req.params;
      let token = await CustomToken.token(uid.toString());
      res.json({ data: token });
    } catch (error: any) {
      console.log(error.message);
    }
  }
}
