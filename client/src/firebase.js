import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// ✅ ADD THIS
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBw1mx2gVJftJW3lKVb6cvcEro2F60ztxA",
  authDomain: "visioncraftai-bf444.firebaseapp.com",
  projectId: "visioncraftai-bf444",
  storageBucket: "visioncraftai-bf444.firebasestorage.app",
  messagingSenderId: "217448243455",
  appId: "1:217448243455:web:7bd0e6c329c0d102896cca",
  measurementId: "G-DL08SFJ5D9"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ 🔐 ADD THESE EXPORTS (IMPORTANT)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();