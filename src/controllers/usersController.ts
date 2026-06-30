import { SeeUser, SaveUser, UpdateUser } from "../services/usersServices.js";
import { Request, Response } from "express";

// to create or save user in database using the firebase IDtoken

export class SaveUserDb {
  static async saveUserDb(req: Request, res: Response) {
    try {
      let uid = req.user.uid;
      let email = req.user.email;
      let { name } = req.body;
      let { address } = req.body;

      let find = await SaveUser.find(uid);

      if (find) {
        return res.send({ message: "the user is alredy exist dont save it " });
      }
      let user = await SaveUser.saveUser(uid, email!, name, address);

      res.json(user);
    } catch (error) {
      return res.json(error);
    }
  }
}

// to see all the users in the website

export class SeeUserDb {
  static async seeUserDb(req: Request, res: Response) {
    try {
      let users = await SeeUser.seeUser();
      res.send(users);
    } catch (error) {
      return res.send(error);
    }
  }
}

// to update the user information

export class UpdateUserDb {
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
