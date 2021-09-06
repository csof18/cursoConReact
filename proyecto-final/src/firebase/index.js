// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import "./firebase/config";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGN_QIc3ekR1RJP_DAFr2gP3h-DXwRHG0",
  authDomain: "regalameregalate-4b421.firebaseapp.com",
  projectId: "regalameregalate-4b421",
  storageBucket: "regalameregalate-4b421.appspot.com",
  messagingSenderId: "824541277651",
  appId: "1:824541277651:web:a84ee65977b14749569326"
};

// Initialize Firebase y lo pongo en app
const app = initializeApp(firebaseConfig);

// getData devuelve la conexion con firestore a mi app
export const getData = () => getFirestore(app);


