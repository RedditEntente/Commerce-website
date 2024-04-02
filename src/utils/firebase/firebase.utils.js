// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword ,signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


import {
getFirestore,
doc,
getDoc,
setDoc,
collection,
writeBatch,
query,
getDocs,

} from "firebase/firestore";

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
export function signInWithGooglePopup() {
  return signInWithPopup(auth, provider);
}
export function signInWithGoogleRedirect() {
  return signInWithRedirect(auth, provider);
}

export const db = getFirestore();

export async function addCollectionAndDocuments(collectionKey, objectsToAdd) {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("done");
}

export async function getCategoriesAndDocuments() {
  const collectionRef = collection(db, "categories");


  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  const catergoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;



  }, {});
  return catergoryMap;
}


export async function createUserDocumentFromAuth(userAuth, additionalInformation = {}) {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }
  return userDocRef;
}



export async function createAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);

}


export async function signInAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);

}

export async function signOutUser() {
  return signOut(auth);
}


export function onAuthStateChangedListener(callback) {
  onAuthStateChanged(auth, callback);
}