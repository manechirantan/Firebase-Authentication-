import UserService from "../services/usersServices.js";
import { Request, Response } from "express";

export default class UserController {
  // to create or save user in database using the firebase IDtoken
  static async saveUserDb(req: Request, res: Response) {
    try {
      let uid = req.user.uid;
      let email = req.user.email;
      let { name, address } = req.body;
      let { user, createdUser } = await UserService.saveUser(
        uid,
        email!,
        name,
        address,
      );

      if (!createdUser) {
        return res.json({ message: "this user has been already created" });
      }

      res.json(user);
    } catch (error) {
      return res.json(error);
    }
  }
  // to see all the users in the website
  static async seeUserDb(req: Request, res: Response) {
    try {
      let users = await UserService.seeUser();
      res.send(users);
    } catch (error) {
      return res.send(error);
    }
  }

  //to update the user information

  static async updateUserDb(req: Request, res: Response) {
    try {
      let id = req.user.uid;
      console.log(req.user.uid);
      console.log(req.user);
      let { address } = req.body;
      let user = await UserService.updateuser(address, id);
      res.send(user);
      return user;
    } catch (error) {
      return res.send(error);
    }
  }
}
