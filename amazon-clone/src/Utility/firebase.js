// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth'
import "firebase/compat/firestore"
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7ht1-SdVj7Y3euGPUugl9Z_sKvzDTVHc", 
  authDomain: "clone-8b30b.firebaseapp.com",
  projectId: "clone-8b30b",
  storageBucket: "clone-8b30b.appspot.com",
  messagingSenderId: "729419548089",
  appId: "1:729419548089:web:76a3a362abf671b3c4a268",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore()
