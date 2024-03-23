// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuq_qbxDojZfDKECcV3oIXyl-OAGe0pZo",
  authDomain: "shop-website-db.firebaseapp.com",
  projectId: "shop-website-db",
  storageBucket: "shop-website-db.appspot.com",
  messagingSenderId: "102701266621",
  appId: "1:102701266621:web:8fb03612aaccfeb346a9d4"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});


export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);