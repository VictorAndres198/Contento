import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBzXbEUQ7NXlf-sjzI4lWawPKCUHSnq7iQ",
    authDomain: "contento-14a0d.firebaseapp.com",
    projectId: "contento-14a0d",
    storageBucket: "contento-14a0d.appspot.com",
    messagingSenderId: "278809274250",
    appId: "1:278809274250:web:38ffb5406e64b3021fca73",
    measurementId: "G-3Y2CX7QG87"
  };

const firebaseApp= initializeApp(firebaseConfig);
const db = getFirestore();

export default db;