// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhoQB0CZ0aoS0XMuCcIUKur1D08X9HORI",
  authDomain: "my-app-4ba0b.firebaseapp.com",
  projectId: "my-app-4ba0b",
  storageBucket: "my-app-4ba0b.appspot.com",
  messagingSenderId: "981528018405",
  appId: "1:981528018405:web:e1348922c1fbbdeb0a830c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
