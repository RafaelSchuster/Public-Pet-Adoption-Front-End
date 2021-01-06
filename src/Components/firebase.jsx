import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyADYhWgb94IeFj4eHNOKQ63aeTxXz5JXhk",
    authDomain: "pet-project--itc.firebaseapp.com",
    projectId: "pet-project--itc",
    storageBucket: "pet-project--itc.appspot.com",
    messagingSenderId: "159694923487",
    appId: "1:159694923487:web:8b1fa9a12e0fbd8dbbeb6a"
};

const appFire = firebase.initializeApp(firebaseConfig);
export { firebase, appFire };