// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  
  apiKey: "AIzaSyBIakwd1-KIzfUjVtr9niCgMhJXOTHIfQU",
  authDomain: "amigos-6e55f.firebaseapp.com",
  projectId: "amigos-6e55f",
  storageBucket: "amigos-6e55f.appspot.com",
  messagingSenderId: "900040789130",
  appId: "1:900040789130:web:5d7e3e0cb2276513ec3173"
  
  /*apiKey: "AIzaSyDIruSgVPwbf1IJbZaO_cN_CMyyR89vO18",
  authDomain: "whatsapp-clone-f5b58.firebaseapp.com",
  projectId: "whatsapp-clone-f5b58",
  storageBucket: "whatsapp-clone-f5b58.appspot.com",
  messagingSenderId: "535001058924",
  appId: "1:535001058924:web:c90ecdaf3bc568cce81249"*/
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
auth.useDeviceLanguage();
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();