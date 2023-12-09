import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app'; // Utilisez 'firebase/compat/app'
import 'firebase/compat/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyBRVxTJ1o6kqz_K3YkoBmK1CPwCo6k6ifY",
  authDomain: "quotegen-dd171.firebaseapp.com",
  projectId: "quotegen-dd171",
  storageBucket: "quotegen-dd171.appspot.com",
  messagingSenderId: "662898653147",
  appId: "1:662898653147:web:4dd8b8c3fbd05b9e6c99fe"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
