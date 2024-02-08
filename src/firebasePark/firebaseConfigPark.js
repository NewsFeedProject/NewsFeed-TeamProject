// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBufb-5Avh-02Q5KOHg5jONpcHuB_Z4TTo",
  authDomain: "newsfeed-project-ef014.firebaseapp.com",
  projectId: "newsfeed-project-ef014",
  storageBucket: "newsfeed-project-ef014.appspot.com",
  messagingSenderId: "361537428167",
  appId: "1:361537428167:web:ee9f21703e8e3148bdbce2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
