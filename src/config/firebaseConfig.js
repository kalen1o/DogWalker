import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAfZSlUAkIL21lbSL31x_9dowk5OyuGR4A",
    authDomain: "dogwalker-88634.firebaseapp.com",
    databaseURL: "https://dogwalker-88634.firebaseio.com",
    projectId: "dogwalker-88634",
    storageBucket: "dogwalker-88634.appspot.com",
    messagingSenderId: "192510245330"
};
firebase.initializeApp(config);
export default firebase;