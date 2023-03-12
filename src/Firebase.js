import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";




// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_hAGdPBkSTGnDZqyfZsqQRMM0CpTT8PI",
    authDomain: "trello-board-f8a51.firebaseapp.com",
    projectId: "trello-board-f8a51",
    storageBucket: "trello-board-f8a51.appspot.com",
    messagingSenderId: "273653484085",
    appId: "1:273653484085:web:c116c48b22069431193f7c",
    measurementId: "G-8QW19PKKTT"
  };

  const app=initializeApp(firebaseConfig);
  const db=getFirestore();
  const timestamp=serverTimestamp();


  export {app,db,timestamp}