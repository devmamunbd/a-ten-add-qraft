// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHLYdOaUM3o6-2cdNZRfsTPAvwNEXJJbI",
  authDomain: "assignment-ten-f7141.firebaseapp.com",
  projectId: "assignment-ten-f7141",
  storageBucket: "assignment-ten-f7141.appspot.com",
  messagingSenderId: "1091234915675",
  appId: "1:1091234915675:web:569fcf8be0fed30409667e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
