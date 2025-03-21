// Import the functions you need from the SDKs you need
import { initializeApp } from "./node_modules/firebase/app";
import { getAnalytics } from "./node_modules/firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfKnS8JTUh10-33aL-1C1PzDCqglPDido",
  authDomain: "cyber-gym-2cb09.firebaseapp.com",
  projectId: "cyber-gym-2cb09",
  storageBucket: "cyber-gym-2cb09.firebasestorage.app",
  messagingSenderId: "1009913130977",
  appId: "1:1009913130977:web:6eba11730de510d5d7eca0",
  measurementId: "G-NPFVZJJ0JB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);