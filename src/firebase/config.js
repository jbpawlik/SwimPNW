// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCBU0opnzvAjxhNAJBIjKrogrw-Sus-NaM",
//   authDomain: "swimpnw.firebaseapp.com",
//   projectId: "swimpnw",
//   storageBucket: "swimpnw.appspot.com",
//   messagingSenderId: "346492400252",
//   appId: "1:346492400252:web:c4d03fc26f3578da684ff9"
// };

import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID 
}
firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

