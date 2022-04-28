import { configure } from "@testing-library/react";
import  firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig =  {
    apiKey: "AIzaSyA_lxo-mADH2Z91f-PoPcZjWWpN2yCnNZw",
    authDomain: "task-46e99.firebaseapp.com",
    databaseURL: "https://task-46e99-default-rtdb.firebaseio.com",
    projectId: "task-46e99",
    storageBucket: "task-46e99.appspot.com",
    messagingSenderId: "947521955518",
    appId: "1:947521955518:web:e7b50fc7ee9e327459e0ef",
    measurementId: "G-35XMF60X35"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  var db= firebaseApp.firestore();

  export { db };