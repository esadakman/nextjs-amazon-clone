// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.GOOGLE_ID,
  authDomain: process.env.GOOGLE_SECRET,
  projectId: process.env.FIREBASE_API_KEY,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
}; 

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app(); 

const db = app.firestore();

export default db;