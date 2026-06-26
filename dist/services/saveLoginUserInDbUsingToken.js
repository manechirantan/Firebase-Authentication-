import User from "../models/newUser.js";
export default class SaveUser {
    static async find(uid) {
        try {
            const find = await User.findByPk(uid);
            return find;
        }
        catch (error) {
            console.log(error);
        }
    }
    static async saveUser(uid, email, name) {
        try {
            const user = await User.create({ uid: uid, email: email, name: name });
            await user.save();
            return user;
        }
        catch (error) {
            console.log(error);
        }
    }
}
