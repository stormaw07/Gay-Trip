import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCueYBdU_O-mVNfPH6pBCugZqKv3Ss1ubA",
    authDomain: "gay-trip.firebaseapp.com",
    projectId: "gay-trip",
    storageBucket: "gay-trip.firebasestorage.app",
    messagingSenderId: "100152538609",
    appId: "1:100152538609:web:0332845cd0fcd458b60050",
    //measurementId: "G-GHLPCY4DNP"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
