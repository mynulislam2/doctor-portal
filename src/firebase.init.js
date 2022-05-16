// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTQDUpHqsB9z5b65wNCQDDmkKQbq50ow4",
  authDomain: "notestaker-84fa9.firebaseapp.com",
  projectId: "notestaker-84fa9",
  storageBucket: "notestaker-84fa9.appspot.com",
  messagingSenderId: "282093424826",
  appId: "1:282093424826:web:abf7f87b1300cea9827283"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;