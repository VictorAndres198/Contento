import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage';
import { getFirestore} from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyBzXbEUQ7NXlf-sjzI4lWawPKCUHSnq7iQ",
  authDomain: "contento-14a0d.firebaseapp.com",
  projectId: "contento-14a0d",
  storageBucket: "contento-14a0d.appspot.com",
  messagingSenderId: "278809274250",
  appId: "1:278809274250:web:38ffb5406e64b3021fca73",
  measurementId: "G-3Y2CX7QG87"

};


  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const storage = getStorage(app);
  const auth = getAuth(app);
  
  export { db, storage, auth };