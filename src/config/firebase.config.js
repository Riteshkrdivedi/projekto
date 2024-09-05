// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.PROJEKTO_API_KEY,
  authDomain: process.env.PROJEKTO_AUTH_DOMAIN,
  projectId: process.env.PROJEKTO_PROJECTID,
  storageBucket: process.env.PROJEKTO_STORAGE_BUCKET,
  messagingSenderId: process.env.PROJEKTO_MESSAGING_SENDER_ID,
  appId: process.env.PROJEKTO_API_ID,
  measurementId: process.env.PROJEKTO_MEASUREMENT_ID,
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, analytics };
