// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBsUPQWa8OZyWCirwM-aKdeY0wuUhYhFg",
  authDomain: "dragon-news-dn.firebaseapp.com",
  projectId: "dragon-news-dn",
  storageBucket: "dragon-news-dn.firebasestorage.app",
  messagingSenderId: "115866707117",
  appId: "1:115866707117:web:bad2b570ac785394789224",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
