import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD2EZaNaXUJYcKSGlHvAOfxWAtUxEV7wkw",
  authDomain: "clone-dd113.firebaseapp.com",
  projectId: "clone-dd113",
  storageBucket: "clone-dd113.appspot.com",
  messagingSenderId: "22397095515",
  appId: "1:22397095515:web:01dd65e41b052777ebb97e",
  measurementId: "G-6MCHB51HDD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
