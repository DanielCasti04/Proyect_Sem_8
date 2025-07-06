// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOyrP4SrRm4iYwP5tohhQz5aU5xLyZ-oU",
  authDomain: "proyecteventssem8.firebaseapp.com",
  projectId: "proyecteventssem8",
  storageBucket: "proyecteventssem8.firebasestorage.app",
  messagingSenderId: "172885191069",
  appId: "1:172885191069:web:fcee66a82570c4f2bca774",
  measurementId: "G-KSJEFJTTVJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
