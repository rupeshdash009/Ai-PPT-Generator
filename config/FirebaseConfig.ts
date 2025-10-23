// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "neuraslide.firebaseapp.com",
  projectId: "neuraslide",
  storageBucket: "neuraslide.firebasestorage.app",
  messagingSenderId: "520644541929",
  appId: "1:520644541929:web:1f34c41ef1668e0dbfdf78",
  measurementId: "G-S1E58934Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseDb = getFirestore(app,)