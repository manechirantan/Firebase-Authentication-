import UpdateUser from "../services/upadteUserProfile.js";
import { Request, Response } from "express";

export default class UpdateUserDb {
  static async updateUserDb(req: Request, res: Response) {
    try {
      let { id } = req.params;
      let { address } = req.body;
      let user = await UpdateUser.updateuser(Number(id), address);
      res.send(user);
      return user;
    } catch (error) {
      return res.send(error);
    }
  }
}
