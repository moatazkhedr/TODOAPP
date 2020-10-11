// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//const firebaseConfig = {

//};
import firbase from "firbase";
const firebaseApp = firbase.initializeApp({
  apiKey: "AIzaSyCLJo5jB1MOmoHPy-pb88x2yzLZv5tnBGg",
  authDomain: "todo-app-cp-bae1f.firebaseapp.com",
  databaseURL: "https://todo-app-cp-bae1f.firebaseio.com",
  projectId: "todo-app-cp-bae1f",
  storageBucket: "todo-app-cp-bae1f.appspot.com",
  messagingSenderId: "500254133458",
  appId: "1:500254133458:web:741e9ab685310f58e8710b",
  measurementId: "G-MB584CYKE8",
});

const db = firebaseApp.firestore();

export default db;
