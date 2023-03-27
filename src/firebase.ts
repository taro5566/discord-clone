import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpQ_MEiqUOKBQ9XB-qImMeUUC5UXDcgtc",
  authDomain: "discord-clone-f94db.firebaseapp.com",
  projectId: "discord-clone-f94db",
  storageBucket: "discord-clone-f94db.appspot.com",
  messagingSenderId: "506096173237",
  appId: "1:506096173237:web:bae2ce6700e1fdac53befc",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, db };
