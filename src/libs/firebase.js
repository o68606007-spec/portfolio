// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzA8xID3W3PfXGtHnw139Ji3BDWnW502Q",
  authDomain: "portfolio-4bfd3.firebaseapp.com",
  projectId: "portfolio-4bfd3",
  storageBucket: "portfolio-4bfd3.firebasestorage.app",
  messagingSenderId: "161150683426",
  appId: "1:161150683426:web:ebdffc7bec9d2bdd743d7b",
  measurementId: "G-04L7KWJ6V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);