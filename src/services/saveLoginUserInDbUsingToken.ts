import User from "../models/newUser.js";

export default class SaveUser {
  static async find(uid: string) {
    try {
      const find = await User.findOne({ where: { uid } });
      return find;
    } catch (error) {
      console.log(error);
    }
  }
  static async saveUser(
    uid: string,
    email: string,
    name: string,
    address: string,
  ) {
    try {
      const user = await User.create({
        uid: uid,
        email: email,
        name: name,
        address: address,
      });
      await user.save();
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
