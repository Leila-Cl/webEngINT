// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRx2WJIc3OO0WsXJgO1jh9nnpxeGWSRFw",
  authDomain: "webengint.firebaseapp.com",
  projectId: "webengint",
  storageBucket: "webengint.appspot.com",
  messagingSenderId: "245278394442",
  appId: "1:245278394442:web:6743972e4b22b75ba43eb3",
  measurementId: "G-39QNFSQQTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => signInWithRedirect(auth, provider);

export default app;