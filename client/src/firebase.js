// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realestate-da26d.firebaseapp.com",
  projectId: "realestate-da26d",
  storageBucket: "realestate-da26d.appspot.com",
  messagingSenderId: "931855021140",
  appId: "1:931855021140:web:cca1627d472a3e356ca9c1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);