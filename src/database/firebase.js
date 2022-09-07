import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArzAHOl202b2Beb07HcR8uB6U34GRKJYM",
  authDomain: "wc-sudat-d96db.firebaseapp.com",
  projectId: "wc-sudat-d96db",
  storageBucket: "wc-sudat-d96db.appspot.com",
  messagingSenderId: "347776751040",
  appId: "1:347776751040:web:5363b70db5e54a49c9e425",
  measurementId: "G-05WE4C6H5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export {db}