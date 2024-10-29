// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCepA6fn_gctKVr9OSSjd0v7jOxFeClY3k",
    authDomain: "saira-s-project-5bb8b.firebaseapp.com",
    projectId: "saira-s-project-5bb8b",
    storageBucket: "saira-s-project-5bb8b.appspot.com",
    messagingSenderId: "480139103848",
    appId: "1:480139103848:web:87d3f0e86cc29bebb875dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }

