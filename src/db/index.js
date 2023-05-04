
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAey_V7X0v9ptb4lKZAtk3EGNPpxLgs1xs",
  authDomain: "svelte-social-da1d4.firebaseapp.com",
  projectId: "svelte-social-da1d4",
  storageBucket: "svelte-social-da1d4.appspot.com",
  messagingSenderId: "1057925145143",
  appId: "1:1057925145143:web:e354dcada018dca10a55b2",
  measurementId: "G-WN98NVKXZR"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const firebaseAuth = getAuth(app);

