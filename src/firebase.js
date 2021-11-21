import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBN7jKD11FkiW-saUJwy4cXk2xA70H7PqI",
    authDomain: "solar-systemis.firebaseapp.com",
    projectId: "solar-systemis",
    storageBucket: "solar-systemis.appspot.com",
    messagingSenderId: "1064570618685",
    appId: "1:1064570618685:web:66b25be30e703e8ab7fb54"
};
firebase.initializeApp(firebaseConfig);

export default firebase;