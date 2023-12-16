import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
 const firebaseConfig = {
  apiKey: "AIzaSyBRVxTJ1o6kqz_K3YkoBmK1CPwCo6k6ifY",
  authDomain: "quotegen-dd171.firebaseapp.com",
  projectId: "quotegen-dd171",
  storageBucket: "quotegen-dd171.appspot.com",
  messagingSenderId: "662898653147",
  appId: "1:662898653147:web:4dd8b8c3fbd05b9e6c99fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);