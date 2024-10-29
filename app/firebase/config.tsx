// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID

    // apiKey: "AIzaSyADkuU_ya4ty6oRgkKP6sUcZ2liTryUQFw",
    // authDomain: "dataserviceauth.firebaseapp.com",
    // projectId: "dataserviceauth",
    // storageBucket: "dataserviceauth.appspot.com",
    // messagingSenderId: "979720036581",
    // appId: "1:979720036581:web:f92aa5f4ef652a5dfdf40c"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const auth = getAuth(app)
const firestore = getFirestore(app)

export { app, auth, firestore }