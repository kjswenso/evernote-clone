// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr047YU-KugfZ8C68Y30n916OSf_q0TEw",
  authDomain: "evernoteclone-4bd40.firebaseapp.com",
  projectId: "evernoteclone-4bd40",
  storageBucket: "evernoteclone-4bd40.appspot.com",
  messagingSenderId: "1041103357426",
  appId: "1:1041103357426:web:ec625224ef353f8692576b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);