import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCJ0YvuELrc82P4Vq2khIw7TTqWfTfCWZM",
  authDomain: "netflix-clone-demo-fbe77.firebaseapp.com",
  projectId: "netflix-clone-demo-fbe77",
  storageBucket: "netflix-clone-demo-fbe77.appspot.com",
  messagingSenderId: "1092874566006",
  appId: "1:1092874566006:web:7bf0959d5ae020df162257",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

// For user login database we use fireStore to store the userSubscription
const db = firebaseApp.firestore;
// For authentication we use FirebaseAuth.
const auth = firebase.auth();
export { auth };
export default db;
