// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmo2aLg7EASzQg5Tcxgg1QoH5f7j3IDTk",
  authDomain: "recipe-hub-50c81.firebaseapp.com",
  projectId: "recipe-hub-50c81",
  storageBucket: "recipe-hub-50c81.appspot.com",
  messagingSenderId: "33534168539",
  appId: "1:33534168539:web:93cd68db7b6d2b5284ebfe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app 