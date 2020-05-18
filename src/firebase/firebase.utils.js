import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


  // Your web app's Firebase configuration

const config = {
  apiKey: "AIzaSyDdGODoxGxcggnZ1WFBBqRxwWOUGqzxgB0",
  authDomain: "cw-db-b3e66.firebaseapp.com",
  databaseURL: "https://cw-db-b3e66.firebaseio.com",
  projectId: "cw-db-b3e66",
  storageBucket: "cw-db-b3e66.appspot.com",
  messagingSenderId: "727693890191",
  appId: "1:727693890191:web:ef407a3292d70f1a6716fa",
  measurementId: "G-SZ3K63JG4B"
}
firebase.initializeApp(config);

//for google authentication

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt:'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;