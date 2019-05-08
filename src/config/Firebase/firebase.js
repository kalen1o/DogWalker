import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAfZSlUAkIL21lbSL31x_9dowk5OyuGR4A",
    authDomain: "dogwalker-88634.firebaseapp.com",
    databaseURL: "https://dogwalker-88634.firebaseio.com",
    projectId: "dogwalker-88634",
    storageBucket: "dogwalker-88634.appspot.com",
    messagingSenderId: "192510245330"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
        this.storage = app.storage();

        this.googleProvider = new app.auth.GoogleAuthProvider();
        this.facebookProvider = new app.auth.FacebookAuthProvider();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignInWithGoogle = () =>
        this.auth.signInWithPopup(this.googleProvider);
    
    doSignInWithFacebook = () =>
        this.auth.signInWithPopup(this.facebookProvider);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    // *** Storage API ***
    uploadProfileImage = (image, getUrl) => {
        const UploadTask = this.storage.ref(`profileImages/${image.name}`).put(image);
        UploadTask.on('state_changed', 
        (snapshot) => {
            //progress
        },
        (error) => {
            console.log(error)
        },
        () => {
            this.storage.ref('profileImages').child(image.name).getDownloadURL().then(url => {
                console.log(url, '1')
                getUrl(`${url}`)
            })
        })
    }
}
export default Firebase;