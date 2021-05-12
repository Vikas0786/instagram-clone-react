import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// here I want to import the seed file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyB6COBmHA3dFdhJhhX8nloQNK9OmuvpDlE",
  authDomain: "instagram-clone-b0780.firebaseapp.com",
  projectId: "instagram-clone-b0780",
  storageBucket: "instagram-clone-b0780.appspot.com",
  messagingSenderId: "729887866420",
  appId: "1:729887866420:web:f620b4d2980e2d14be1461",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);

export { firebase, FieldValue };
