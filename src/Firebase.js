// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1ZHvrKUK-I49b4Jh7sCYVW9w9c45egzc",
  authDomain: "authlogin-3bb8a.firebaseapp.com",
  projectId: "authlogin-3bb8a",
  storageBucket: "authlogin-3bb8a.appspot.com",
  messagingSenderId: "209562374286",
  appId: "1:209562374286:web:ac8650aab2720fd605b9df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)

export {auth}