//import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app"
//import 'firebase/auth'
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "auth-dev-672f7.firebaseapp.com",
    projectId: "auth-dev-672f7",
    storageBucket: "auth-dev-672f7.appspot.com",
    messagingSenderId: "193696276909",
    appId: "1:193696276909:web:c40597e50a2950b59e4124"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
//export const auth = app.auth;
//export default app