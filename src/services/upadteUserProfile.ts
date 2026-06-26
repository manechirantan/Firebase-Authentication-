import User from "../models/newUser.js";

export default class UpdateUser {
  static async updateuser(id: number, address: string) {
    let user = await User.update({ address }, { where: { id } });
    console.log(user);
    return user;
  }
}
