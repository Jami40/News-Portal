// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
  apiKey: "AIzaSyB7zKRLChmI-4vSOnqj3vSfXVyd74uMLV8",
  authDomain: "news-portal-a51a8.firebaseapp.com",
  projectId: "news-portal-a51a8",
  storageBucket: "news-portal-a51a8.firebasestorage.app",
  messagingSenderId: "617172242599",
  appId: "1:617172242599:web:428237ac79e6c9b67d0b82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)