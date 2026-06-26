import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

export let fireApp = initializeApp({ credential: applicationDefault() });

export let getauth = getAuth(fireApp);
