import React, { Component } from 'react';
import classes from './SignIn.module.css';

import { Formik, Form, Field } from "formik";
import { SignInSchema } from '../../config/yupConfig';

import SignInGoogle from '../../components/SignInGoogle';
import SignInFacebook from '../../components/SignInFacebook';
import { SignUpLink } from '../Registration';
import { PasswordForgetLink } from '../PasswordForget';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../config/Firebase';

class SignInBase extends Component {
	render() {
		return (
			<div className={classes["signin-form-holder"]}>
				<h1 className={classes.h1}>Sign in to DogWalker</h1>
				<SignInGoogle />
				<SignInFacebook />
				<h6 className={classes.h6}>— or —</h6>
				<div className={classes["signin-form-wrapper"]}>
					<Formik
						initialValues={{
							email: '',
							password: ''
						}}
						validationSchema={SignInSchema}
						onSubmit={( values, { resetForm } ) => {
							// console.log(values)
							this.props.firebase
								.doSignInWithEmailAndPassword(values.email, values.password)
									.then(() => {
										resetForm({
											email: '',
											password: ''
										})
										this.props.history.push("/")
									})
									.catch(error => {
										resetForm({
											email: values.email,
											password: ''
										})
										console.log(error)
									})
						}}
						render={({errors, touched}) => (
							<Form>
								<div className={classes["input-wrapper"]}>
									<label htmlFor="signInEmail" className={classes.label}>Email</label>
									<Field
										id="signInEmail"
										className={classes.input}
										name="email"
										type="email"
									/>
									{errors.email && touched.email && (
										<div className={classes.error}>{errors.email}</div>
									)}
								</div>

								<div className={classes["input-wrapper"]}>
									<label htmlFor="signInPassword" className={classes.label}>Password</label>
									<Field
										id="signInPassword"
										className={classes.input}
										name="password"
										type="password"
									/>
								</div>

								<button type="submit" className={classes.btn}>Sign in</button>
								<PasswordForgetLink />
								<SignUpLink />
							</Form>
						)}
					/>
				</div>
			</div>
		)
	}
}

const SignIn = withRouter(withFirebase(SignInBase))

export default SignIn;