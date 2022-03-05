import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFw1YvhhKrEbUjJdfybgLnprH2c39NXME",
  authDomain: "reading-list-app-ab9b8.firebaseapp.com",
  projectId: "reading-list-app-ab9b8",
  storageBucket: "reading-list-app-ab9b8.appspot.com",
  messagingSenderId: "464339885756",
  appId: "1:464339885756:web:e422100615d4819479fab9",
};

// init firebase server
initializeApp(firebaseConfig);

// init firestore database
const db = getFirestore();

export { db };
