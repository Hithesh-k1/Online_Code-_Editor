import firebase from "firebase/app";
import "firebase/storage";
import { FIREBASE_APIKEY } from "../config";

const firebaseConfig = {
    apiKey: FIREBASE_APIKEY,
    authDomain: "online-editor-1174a.firebaseapp.com",
    databaseURL: "https://online-editor-1174a.firebaseio.com",
    projectId: "online-editor-1174a",
    storageBucket: "online-editor-1174a.appspot.com",
    messagingSenderId: "757840794902",
    appId: "1:757840794902:web:06e2c2201648b7777f2c37",
    measurementId: "G-BH3FTPGYD6"
  };
  
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };