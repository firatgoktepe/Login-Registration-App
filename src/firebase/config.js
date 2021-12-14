import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKDdAQhWiopZzyHks-89Ovy0mJeNRvobI",
    authDomain: "login-app-71742.firebaseapp.com",
    projectId: "login-app-71742",
    storageBucket: "login-app-71742.appspot.com",
    messagingSenderId: "599806508881",
    appId: "1:599806508881:web:70955fe4af2a5c49281d70",
    measurementId: "G-33JVC4WN8S"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };