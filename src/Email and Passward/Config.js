// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwomJ1HAL0eUh3TJ6KxF5aIZ4vp3-wJMQ",
  authDomain: "reactemail-df33f.firebaseapp.com",
  projectId: "reactemail-df33f",
  storageBucket: "reactemail-df33f.appspot.com",
  messagingSenderId: "650787532247",
  appId: "1:650787532247:web:e89f023bc87427e4b7ef92",
  measurementId: "G-HEVMZB1W5X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics  = getAnalytics(app);