import React, { Component } from 'react';

import firebase from '../../../config/firebaseConfig';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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