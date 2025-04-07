// Import the functions you need from the SDKs you need
import { initializeApp } from  "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, getFirestore, getDoc } from "firebase/firestore";

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
  measurementId: "G-NPFVZJJ0JB",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const todosCol = collection(db, "todos");
const snapshot = await getDocs(todosCol);

// db.collection("todos").getDocs();

auth.onIdTokenChanged((user) => {});
onAuthStateChanged(auth, (user) => {
  if (user !== null) {
    console.log(" logged in! ");
  } else {
    console.log("No user");
  }
});
