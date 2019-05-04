import firebase from "firebase";

// Initialize Firebase
const config = {
    apiKey: "AIzaSyCOR53cRBGDQKUJY5qh4UzqL42R3FBFRbg",
    authDomain: "testapp-977f6.firebaseapp.com",
    databaseURL: "https://testapp-977f6.firebaseio.com",
    projectId: "testapp-977f6",
    storageBucket: "testapp-977f6.appspot.com",
    messagingSenderId: "341491602313"
};
firebase.initializeApp(config);

export default firebase;