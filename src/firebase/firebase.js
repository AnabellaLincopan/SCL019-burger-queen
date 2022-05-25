import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCOpXS_txo4L8bro1IFRc44CUtJfXvXv6A",
    authDomain: "antv-burguer-queen.firebaseapp.com",
    projectId: "antv-burguer-queen",
    storageBucket: "antv-burguer-queen.appspot.com",
    messagingSenderId: "136136399545",
    appId: "1:136136399545:web:6cb7fab295d9ff28d25968",
    measurementId: "G-7YSX53VQCV"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

