import firebase from "firebase";


// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAK8b2csMiC6IFHD1cuMPTLsg2GLm21v-A",
  authDomain: "worldie-chat-test.firebaseapp.com",
  projectId: "worldie-chat-test",
  storageBucket: "worldie-chat-test.appspot.com",
  messagingSenderId: "602758191701",
  appId: "1:602758191701:web:87c9164e0aa35ba96f92dc",
  measurementId: "G-S2FEYHKSHM"
});
const db = firebaseApp.firestore();

export default db;