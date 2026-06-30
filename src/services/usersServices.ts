import User from "../models/newUser.js";

// to create or save user in database using the firebase IDtoken
export class SaveUser {
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

// to see all the users in the website

export class SeeUser {
  static async seeUser() {
    let user = await User.findAll();
    return user;
  }
}

// to update the user information

export class UpdateUser {
  static async updateuser(uid: number, address: string) {
    try {
      let user = await User.update({ address }, { where: { uid } });
      return user;
    } catch (error) {
      return console.log(error);
    }
  }
}
