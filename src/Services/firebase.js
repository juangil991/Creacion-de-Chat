import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAtLqRnA9caBP-VeixyI3z-YsAguCD4nNY",
    authDomain: "clase-server-side.firebaseapp.com",
    projectId: "clase-server-side",
    storageBucket: "clase-server-side.appspot.com",
    messagingSenderId: "95566111106",
    appId: "1:95566111106:web:6ec954fbd4b6e1e02faf9b"
  };
  firebase.initializeApp(firebaseConfig);
  export const auth = firebase.auth;
  export const db = firebase.database();