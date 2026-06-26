import SeeUser from "../services/getUsers.js";
export default class SeeUserDb {
    static async seeUserDb(req, res) {
        try {
            let users = await SeeUser.seeUser();
            res.send(users);
        }
        catch (error) {
            return res.send(error);
        }
    }
}
