// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore} from "@firebase/firestore";
import {getDatabase} from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmSxlNphMfbv5fPZ6BRMVgcuyNK9Zt6Nk",
  authDomain: "housingpanda-sweproject.firebaseapp.com",
  projectId: "housingpanda-sweproject",
  storageBucket: "housingpanda-sweproject.firebasestorage.app",
  messagingSenderId: "774774044140",
  appId: "1:774774044140:web:3951386c1795aef8ae7cc9",
  measurementId: "G-M9TYEDNN8R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const firestore = getFirestore(app);
const auth = getAuth(app);


async function getData() {
    const ref = collection(firestore, "formData");
    const snapShot = await getDocs(ref);
    const data = snapShot.docs.map(doc => doc.data());
    return data
    
}

export { firestore, database, auth, getData };

