import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRfid5VfDVx69jKgsMXzBxkPTyeOZehdE",
  authDomain: "crwn-clothing-db-44806.firebaseapp.com",
  projectId: "crwn-clothing-db-44806",
  storageBucket: "crwn-clothing-db-44806.appspot.com",
  messagingSenderId: "447701866326",
  appId: "1:447701866326:web:2cc449288d75d72c81a8f7",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  promt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
