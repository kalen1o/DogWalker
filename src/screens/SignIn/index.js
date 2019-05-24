import React, { Component } from 'react';
import classes from './SignIn.module.css';

import { Formik, Form, Field } from "formik";
import { SignInSchema } from '../../config/yupConfig';

import SignInFacebook from '../../components/SignInFacebook';
import DefaultInput from '../../components/ReusableComponents/DefaultInput';
import { SignUpLink } from '../Registration';
import { PasswordForgetLink } from '../PasswordForget';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../config/Firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toast } from 'react-toastify';

class SignInBase extends Component {
	state = {
		showPassword: false
	}

	handleShowPassword = () => {
		this.setState({showPassword: !this.state.showPassword})
	}

	componentDidMount() {
		this.listener = this.props.firebase.auth.onAuthStateChanged(
			authWalker => {
				if (authWalker) {
					this.props.history.replace("/account")
				}
			}
		)
	}

	componentWillUnmount() {
		this.listener();
	}
	
	render() {
		const showPassword = this.state.showPassword ? 'eye-slash' : 'eye';
		return (
			<div className={classes["signin-form-holder"]}>
				<h1 className={classes.h1}>Sign in to DogWalker</h1>
				<div className={classes["signin-form-wrapper"]}>
					<SignInFacebook />
					<h6 className={classes.h6}>— or —</h6>
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
										this.props.history.push("/account")
									})
									.catch(error => {
										resetForm({
											email: values.email,
											password: ''
										})
										toast.error(`${error.message}`)
									})
						}}
						render={({errors, touched}) => (
							<Form>
								<DefaultInput id="signInEmail" label="Email" name="email" type="email" errors={errors} touched={touched} />

								<div className={classes["input-wrapper"]}>
									<label htmlFor="signInPassword" className={classes.label}>Password</label>
									<Field
										id="signInPassword"
										className={classes.input}
										name="password"
										type={this.state.showPassword ? 'text': 'password'}
									/>
									<button onClick={this.handleShowPassword} type="button" className={classes.eye}><FontAwesomeIcon icon={showPassword} /></button>
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