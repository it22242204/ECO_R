import { initializeApp, getApps } from 'firebase/app';
import { initializeAuth, getReactNativePersistence, getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCJGluXyg0FnTrrR7gzIEaJIhpFjIKALYo",
  authDomain: "eco-r-1308.firebaseapp.com",
  projectId: "eco-r-1308",
  storageBucket: "eco-r-1308.appspot.com",
  messagingSenderId: "358305811263",
  appId: "1:358305811263:web:e90893d38916b2e402e18a",
  measurementId: "G-PCLSECX5QF"
};

// Check if Firebase app is already initialized
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Auth with AsyncStorage for persistence
let auth;
if (!getApps().length) {
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
} else {
  auth = getAuth(app);
}

export { firebaseConfig, auth, db };
