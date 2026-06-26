import User from "../models/newUser.js";

export default class SeeUser {
  static async seeUser() {
    let user = await User.findAll();
    return user;
  }
}
