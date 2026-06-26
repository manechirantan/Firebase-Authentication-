import { Request, Response } from "express";
import SaveUser from "../services/saveLoginUserInDbUsingToken.js";

export default class SaveUserDb {
  static async saveUserDb(req: Request, res: Response) {
    try {
      let uid = req.user.uid;
      let email = req.user.email;
      let name = "chirantan";
      let find = await SaveUser.find(uid);

      if (find) {
        return res.send({ message: "the user is alredy exist dont save it " });
      }
      let user = await SaveUser.saveUser(uid, email!, name);

      res.json(user);
    } catch (error) {
      return res.json(error);
    }
  }
}
