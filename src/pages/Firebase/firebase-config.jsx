// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuVGbKDkxF3GuJNUziAPHlI_Mzrg6hHHI",
    authDomain: "expense-tracker-cd.firebaseapp.com",
    projectId: "expense-tracker-cd",
    storageBucket: "expense-tracker-cd.appspot.com",
    messagingSenderId: "799275771308",
    appId: "1:799275771308:web:217c3d9be4164bcb154609",
    measurementId: "G-H8EBG6CG47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)