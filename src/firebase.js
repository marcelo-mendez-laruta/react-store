// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOFgJXEWIWArNaULd6reTh802sQp45JjI",
  authDomain: "react-store-e800e.firebaseapp.com",
  projectId: "react-store-e800e",
  storageBucket: "react-store-e800e.appspot.com",
  messagingSenderId: "797303579411",
  appId: "1:797303579411:web:e6f34a4179a31d27c170e6",
  measurementId: "G-S9Y1QBNVH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore=getFirestore(app);