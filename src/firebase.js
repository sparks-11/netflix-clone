import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from 'firebase/firestore';
// import auth from "firebase/firebase-auth"


const firebaseConfig = {
  apiKey: "AIzaSyD0zFcX38uXk240a2iBP7iF0uOTAVjIXK8",
  authDomain: "netflix-clone-9f468.firebaseapp.com",
  projectId: "netflix-clone-9f468",
  storageBucket: "netflix-clone-9f468.appspot.com",
  messagingSenderId: "784010952699",
  appId: "1:784010952699:web:d9d30dc9ae7d5c6c53555e"
};

const firebaseApp =firebase.initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = firebase.auth();

export { auth };
export default db;