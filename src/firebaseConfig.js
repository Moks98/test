import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDMGdmCNwiC1ZhWbNGqkjR51xAC5VAgtm0",
  authDomain: "airplane-4d04b.firebaseapp.com",
  projectId: "airplane-4d04b",
  storageBucket: "airplane-4d04b.firebasestorage.app",
  messagingSenderId: "622316191104",
  appId: "1:622316191104:web:690f46c83e846536441565",
  measurementId: "G-YF8E2W5DWE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

export { auth, googleProvider, facebookProvider, twitterProvider };
