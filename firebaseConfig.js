// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgtFoPOJbnmQeQgqfpWG8nsRYUtG58CKY",
  authDomain: "binarybattles-41126.firebaseapp.com",
  databaseURL: "https://binarybattles-41126-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "binarybattles-41126",
  storageBucket: "binarybattles-41126.appspot.com",
  messagingSenderId: "132515713467",
  appId: "1:132515713467:web:bcf8abd80cb5dfc98ff49e",
  measurementId: "G-HKMHDV2QE2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getDatabase(app);
//export const auth = getAuth(app);