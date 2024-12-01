import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword ,signInWithEmailAndPassword , onAuthStateChanged , sendEmailVerification, signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { getFirestore ,collection, addDoc, getDocs , doc} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCeE1JmHP27ctNGSGA2MXln31Rzwv5yYsk",
  authDomain: "kuchbhi-8637c.firebaseapp.com",
  projectId: "kuchbhi-8637c",
  storageBucket: "kuchbhi-8637c.firebasestorage.app",
  messagingSenderId: "465095789075",
  appId: "1:465095789075:web:efaa8cc0d8f4135a824de6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {auth ,createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , sendEmailVerification, getFirestore , signOut , collection, addDoc , db, getDocs , doc} 