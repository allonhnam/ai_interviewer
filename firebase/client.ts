
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4Hy5XcLRB5AHRuaYTpca7fILEpYpJMvg",
  authDomain: "ai-interviewer-b5fca.firebaseapp.com",
  projectId: "ai-interviewer-b5fca",
  storageBucket: "ai-interviewer-b5fca.firebasestorage.app",
  messagingSenderId: "642244571783",
  appId: "1:642244571783:web:ab6b05d303a41e5adf7e22",
  measurementId: "G-4R3RW9Q2LR"
};


const app = !getApps.length ? initializeApp(firebaseConfig): getApp()

export const auth = getAuth(app);
export const db = getFirestore(app);