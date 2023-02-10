// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8T0HfI5h6Dr0iHdtg36n0wA2AdSR4jTE",
  authDomain: "react-cursos-acf0e.firebaseapp.com",
  projectId: "react-cursos-acf0e",
  storageBucket: "react-cursos-acf0e.appspot.com",
  messagingSenderId: "523572327191",
  appId: "1:523572327191:web:9da3cb764dd41e32fb3d52"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth=getAuth(FirebaseApp)
export const FirebaseDB=getFirestore(FirebaseApp)