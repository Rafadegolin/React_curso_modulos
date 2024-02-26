import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDyGtSrXAsYu8tWg90HfoncN1bo6zgm_vc",
  authDomain: "miniblog---react-d9590.firebaseapp.com",
  projectId: "miniblog---react-d9590",
  storageBucket: "miniblog---react-d9590.appspot.com",
  messagingSenderId: "257029773412",
  appId: "1:257029773412:web:c221dece3350b053082771"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };