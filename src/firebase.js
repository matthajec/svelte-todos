import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBQqT5shwVPqDsnCMpvD_zobw4TtzoH-_w",
  authDomain: "svelte-todos-c29a0.firebaseapp.com",
  projectId: "svelte-todos-c29a0",
  storageBucket: "svelte-todos-c29a0.appspot.com",
  messagingSenderId: "43614196470",
  appId: "1:43614196470:web:af32a701426f97419912d7"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();