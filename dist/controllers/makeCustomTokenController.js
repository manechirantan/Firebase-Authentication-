import CustomToken from "../services/makeCustomTokenService.js";
export default class CustomTokenController {
    static async token(req, res) {
        try {
            let { uid } = req.params;
            let token = await CustomToken.token(uid.toString());
            res.json({ data: token });
        }
        catch (error) {
            console.log(error.message);
        }
    }
}
