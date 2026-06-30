import User from "../models/newUser.js";

export default class UpdateUser {
  static async updateuser(uid: number, address: string) {
    try {
      let user = await User.update({ address }, { where: { uid } });
      return user;
    } catch (error) {
      return console.log(error);
    }
  }
}
