// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeyQYk60X_HYnTiUd0ZL9388G3s6DVVec",
  authDomain: "electronics-warehouse-ef7bc.firebaseapp.com",
  projectId: "electronics-warehouse-ef7bc",
  storageBucket: "electronics-warehouse-ef7bc.appspot.com",
  messagingSenderId: "972568523405",
  appId: "1:972568523405:web:31a32c28890f4d4545e8c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;