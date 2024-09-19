import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyANgtcbgJuF0sPEdlBhLi8yltx6nFcJaXw",
    authDomain: "sir-basir-hacathone.firebaseapp.com",
    projectId: "sir-basir-hacathone",
    storageBucket: "sir-basir-hacathone.appspot.com",
    messagingSenderId: "498803428760",
    appId: "1:498803428760:web:1c6aa33ebf0f1060e9afed",
    measurementId: "G-G94JDYPGXF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
