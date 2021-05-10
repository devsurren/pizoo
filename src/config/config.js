import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDI1uGaoEVZ8yl74lJ4c6x1wul278U00tU",
    authDomain: "react-firebase-83717.firebaseapp.com",
    projectId: "react-firebase-83717",
    storageBucket: "react-firebase-83717.appspot.com",
    messagingSenderId: "309896605456",
    appId: "1:309896605456:web:1c8d999d3f1a13aed1ff95"
  };
  
  // Initialize Firebase
const firebaseInstance = firebase.initializeApp(firebaseConfig);

export const firebaseAuth = firebaseInstance.auth();

export const firebaseFireStore = firebaseInstance.firestore();

export const firebaseStorage = firebaseInstance.storage();

export const timeStamp= firebase.firestore.FieldValue.serverTimestamp;
