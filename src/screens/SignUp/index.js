import React, { Component } from 'react';
import './style.css';
import SocialNet from '../../components/ReusableComponents/SocialNet';
import ButtonRegistration from '../../components/ButtonRegistration';
import {Link} from 'react-router-dom';

class SignUp extends Component {
	render() {
		return (
			<div className="signup">
				<h1 className="h1-registration">Sign up for DogWalker</h1>
				<SocialNet />
				<h6 className="h6-registration">— or —</h6>
				<ButtonRegistration />
				<p className="sign-info">By signing in or signing up, I agree to Rover.com's Terms of Service and Privacy Policy, confirm that I am 18 years of age or older, and consent to receiving email communication.</p>
				<p className="have-account">Already have a Rover account? <Link to="/signin">Sign in now.</Link></p>
			</div>
		)
	}
}

export default SignUp;