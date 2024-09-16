import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyAXbe0iP_15NKAHq_Nr5RutugO8KcLi8Zo",
  authDomain: "teste-9e60f.firebaseapp.com",
  projectId: "teste-9e60f",
  storageBucket: "teste-9e60f.appspot.com",
  messagingSenderId: "219174152396",
  appId: "1:219174152396:web:9f3d228791aeef2f98ba69",
  measurementId: "G-3BXLKVYBY5"
};


const db = getFirestore(app);
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export { db, auth };