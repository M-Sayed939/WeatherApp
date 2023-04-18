/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBT9pxZRXbtuJyEWgsdOIy1NeRwEbtLm8U",
  authDomain: "reacto-74233.firebaseapp.com",
  projectId: "reacto-74233",
  storageBucket: "reacto-74233.appspot.com",
  messagingSenderId: "1088490926479",
  appId: "1:1088490926479:web:ab86f7afcb207b55369bfa",
  measurementId: "G-Q1MD28QJWL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);


export default auth;
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
