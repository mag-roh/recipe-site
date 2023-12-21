// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyC_ulhFHCmAFCd1VjmRHNfkeXK9h0ErrJE",
  authDomain: "food-recipe-d5ba8.firebaseapp.com",
  projectId: "food-recipe-d5ba8",
  storageBucket: "food-recipe-d5ba8.appspot.com",
  messagingSenderId: "831244470115",
  appId: "1:831244470115:web:f3125c07c11f3358e1b556",
  measurementId: "G-4GWMNR5NH3"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); //for authentication purposes
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;