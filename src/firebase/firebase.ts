import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDnuanIcNb4shz9d3Yp-7r-fvse4UHUQ9k",
  authDomain: "katalog-karang-jaya.firebaseapp.com",
  projectId: "katalog-karang-jaya",
  storageBucket: "katalog-karang-jaya.firebasestorage.app",
  messagingSenderId: "604894414903",
  appId: "1:604894414903:web:6feef33bc5ebae66f6d7b2",
  measurementId: "G-3429D5DFZ9",
};

const app = initializeApp(firebaseConfig);

/**
 * Firebase Authentication
 */
export const auth = getAuth(app);

/**
 * Cloud Firestore
 */
export const db = getFirestore(app);

/**
 * Firebase Storage
 */
export const storage = getStorage(app);

export default app;