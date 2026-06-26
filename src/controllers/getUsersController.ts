import SeeUser from "../services/getUsers.js";
import { Request, Response } from "express";

export default class SeeUserDb {
  static async seeUserDb(req: Request, res: Response) {
    try {
      let users = await SeeUser.seeUser();
      res.send(users);
    } catch (error) {
      return res.send(error);
    }
  }
}
