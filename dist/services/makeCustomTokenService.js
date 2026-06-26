import { getauth } from "../config/firebaseAdminSdk.js";
export default class CustomToken {
    static async token(uid) {
        let token = await getauth.createCustomToken(uid);
        return token;
    }
}
