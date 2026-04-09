// src/firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration (copy from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyA6x6kSzifEzWHyT4qRuNSbPZIcF7iWKnQ",
  authDomain: "opticodex-881e8.firebaseapp.com",
  projectId: "opticodex-881e8",
  storageBucket: "opticodex-881e8.appspot.com",
  messagingSenderId: "1057245537165",
  appId: "1:1057245537165:web:f6808496eebe4cf29b93c4",
  measurementId: "G-866QF7JPYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);         // Authentication
export const db = getFirestore(app);      // Firestore Database
export const storage = getStorage(app);   // Cloud Storage