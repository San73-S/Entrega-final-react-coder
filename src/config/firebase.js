/*import { initializeApp } from "firebase/app";
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
export const db = getFirestore(app);*/

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAWcSfvO2p9iN-a9KV1VtBsuq5cK_NARoM",
    authDomain: "breaking-store.firebaseapp.com",
    projectId: "breaking-store",
    storageBucket: "breaking-store.firebasestorage.app",
    messagingSenderId: "82010205696",
    appId: "1:82010205696:web:f50e4669de3b1d6d80f2e5",
    measurementId: "G-ZCRSNNHDRY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);