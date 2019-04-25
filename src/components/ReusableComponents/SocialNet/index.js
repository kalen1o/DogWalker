import React, { Component } from 'react';
import './style.css';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

firebase.initializeApp({
	apiKey: "AIzaSyAfZSlUAkIL21lbSL31x_9dowk5OyuGR4A",
    authDomain: "dogwalker-88634.firebaseapp.com",
    databaseURL: "https://dogwalker-88634.firebaseio.com",
    projectId: "dogwalker-88634",
    storageBucket: "dogwalker-88634.appspot.com",
    messagingSenderId: "192510245330"
})

class SocialNet extends Component {
	state = {
		isLoggedIn: false
	}

	uiConfig = {
		signInFlow: "popup",
		signInOptions: [
			firebase.auth.GoogleAuthProvider.PROVIDER_ID,
			firebase.auth.FacebookAuthProvider.PROVIDER_ID
		],
		callbacks: {
		  signInSuccess: () => false
		}
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged(user => {
			this.setState({isLoggedIn: !!user})
			console.log(user)
		})
	}
	render() {
		return (
			<div>
				{this.state.isLoggedIn ?
					<div className="">
						<div>Sign In</div>
						<button onClick={() => firebase.auth().signOut()}>Sign Out</button>
					</div> :
					<StyledFirebaseAuth
						uiConfig={this.uiConfig}
						firebaseAuth={firebase.auth()}
					/>
				}
			</div>
		)
	}
}

export default SocialNet;