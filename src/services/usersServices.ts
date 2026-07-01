import User from "../models/newUser.js";

export default class UserService {
  // to create or save user in database using the firebase IDtoken
  static async saveUser(
    uid: string,
    email: string,
    name: string,
    address: string,
  ) {
    try {
      const [user, createdUser] = await User.findOrCreate({
        where: {
          uid,
          name,
        },
        defaults: {
          uid: uid,
          email: email,
          name: name,
          address: address,
        },
      });
      return { user, createdUser };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  // to see all the users in the website
  static async seeUser() {
    let user = await User.findAll();
    return user;
  }
  // to update the user information

  static async updateuser(uid: number, address: string) {
    try {
      let user = await User.update({ address }, { where: { uid } });
      return user;
    } catch (error) {
      return console.log(error);
    }
  }
}
