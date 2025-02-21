import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCqGAYiDqaxVAGVe4jYXDml1gmPUUu3EmQ",
    authDomain: "autoparts-775fb.firebaseapp.com",
    projectId: "autoparts-775fb",
    storageBucket: "autoparts-775fb.firebasestorage.app",
    messagingSenderId: "878590353281",
    appId: "1:878590353281:web:e81050e4a68c154b941280"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);