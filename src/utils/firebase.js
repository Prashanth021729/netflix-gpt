// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCm9q_JGpeB7yswzEZjd5iOMlxWjYCGcmw",
  authDomain: "netflixgpt-6528b.firebaseapp.com",
  projectId: "netflixgpt-6528b",
  storageBucket: "netflixgpt-6528b.appspot.com",
  messagingSenderId: "875594947243",
  appId: "1:875594947243:web:5e0b8fc1ef85d064af35ee",
  measurementId: "G-FSQ7QPP2Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
