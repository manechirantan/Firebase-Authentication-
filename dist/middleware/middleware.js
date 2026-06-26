import { getauth } from "../config/firebaseAdminSdk.js";
export default async function verify(req, res, next) {
    try {
        let tokenn = req.headers.authorization;
        let token = tokenn?.split(" ")[1];
        if (!token) {
            return res.json({ error: "not Authorised" });
        }
        const decoded = await getauth.verifyIdToken(token);
        req.user = decoded;
        next();
    }
    catch (error) {
        return res.json({ error });
    }
}
