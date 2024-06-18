import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDOCNAiuPz-Ka2zx9U2oZ6Gwm_Z-2tVc58",
    authDomain: "grupo15601-cbdf7.firebaseapp.com",
    projectId: "grupo15601-cbdf7",
    storageBucket: "grupo15601-cbdf7.appspot.com",
    messagingSenderId: "502894219541",
    appId: "1:502894219541:web:ee4e9e129e08bc7386191c"
  };
 
firebase.initializeApp(firebaseConfig);
 
const db = firebase.firestore();
 
export { db };
