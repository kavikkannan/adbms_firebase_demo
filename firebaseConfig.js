// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqde4zjLji09WYRjez70O_a0SBfeMYREg",
  authDomain: "adbms-4e743.firebaseapp.com",
  databaseURL: "https://adbms-4e743-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "adbms-4e743",
  storageBucket: "adbms-4e743.appspot.com",
  messagingSenderId: "680441782183",
  appId: "1:680441782183:web:895db0aa6c0da2700d2082"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);
//export const auth = getAuth(app);