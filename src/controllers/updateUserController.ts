import UpdateUser from "../services/upadteUserProfile.js";
import { Request, Response } from "express";

export default class UpdateUserDb {
  static async updateUserDb(req: Request, res: Response) {
    try {
      let id = req.user.uid;
      console.log(req.user.uid);
      console.log(req.user);
      let { address } = req.body;
      let user = await UpdateUser.updateuser(address, id);
      res.send(user);
      return user;
    } catch (error) {
      return res.send(error);
    }
  }
}
