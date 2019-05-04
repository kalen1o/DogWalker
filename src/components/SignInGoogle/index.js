import React, { Component } from 'react';
import classes from './SignInGoogle.module.css';

import { Formik, Form } from "formik";
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../config/Firebase';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SignInGoogleBase extends Component {
	render() {
		return (
			<Formik
				onSubmit={() => {
					this.props.firebase
						.doSignInWithGoogle()
						.then(socialAuthWalker => {
							return this.props.firebase
								.user(socialAuthWalker.user.uid)
								.set({
									name: socialAuthWalker.user.displayName,
									email: socialAuthWalker.user.email
								})
						})
						.then(() => {
							this.props.history.push("/")
						})
						.catch(error => {
							console.log(error)
						})
				}}
				render={() => (
					<Form>
						<button type="submit" className={classes.btn}><FontAwesomeIcon icon={['fab', 'google']} /> Sign in with Google</button>
					</Form>
				)}
			/>
		)
	}
}

const SignInGoogle = compose(
	withRouter,
	withFirebase,
)(SignInGoogleBase)

export default SignInGoogle;