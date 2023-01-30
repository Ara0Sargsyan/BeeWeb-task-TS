
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

  const firebaseConfig = {
    apiKey: "AIzaSyBxcduWnaZW1_xtYNn9HY--ANArNDP2xSw",
    authDomain: "beeweb-task-24a9a.firebaseapp.com",
    projectId: "beeweb-task-24a9a",
    storageBucket: "beeweb-task-24a9a.appspot.com",
    messagingSenderId: "119106771173",
    appId: "1:119106771173:web:cea1fc5052499636ba5c0c",
    measurementId: "G-2JMVELL33G",
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const storage = getStorage(app);
  export const auth = getAuth(app);