// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyDtsCYXBt2T0JXXnz6dxNYinm_n07tvqdY",
  // authDomain: "membresia-956d2.firebaseapp.com",
  // projectId: "membresia-956d2",
  // storageBucket: "membresia-956d2.appspot.com",
  // messagingSenderId: "228993159108",
  // appId: "1:228993159108:web:0a8caf52b2a765209e9e91"
  apiKey: "AIzaSyB3TGB6COJhMrQBf5NuySR0XAPyHwqt4fg",
  authDomain: "inawebestadisticas.firebaseapp.com",
  projectId: "inawebestadisticas",
  storageBucket: "inawebestadisticas.appspot.com",
  messagingSenderId: "60523684324",
  appId: "1:60523684324:web:e2243182edce300cfca7f1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
