// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA10mdN32r2pn_wRrysUkyLb6PYQdjNtqU",
  authDomain: "project-test-2d43e.firebaseapp.com",
  databaseURL: "https://project-test-2d43e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project-test-2d43e",
  storageBucket: "project-test-2d43e.appspot.com",
  messagingSenderId: "534335368031",
  appId: "1:534335368031:web:f3a31d93e655a9a28e64ea",
  measurementId: "G-81EPCJ137M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
