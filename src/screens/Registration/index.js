import React, { Component } from 'react';
import classes from './Registration.module.css';
import { Formik, Form, Field } from "formik";
import { RegistrationSchema } from '../../config/yupConfig';
import {Link, withRouter} from 'react-router-dom';

import { withFirebase } from '../../config/Firebase';
import { compose } from 'recompose';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class RegistrationBase extends Component {
	state = {
		showPassword: false,
		image: null,
		imageUrl: 'https://firebasestorage.googleapis.com/v0/b/dogwalker-88634.appspot.com/o/nouser.png?alt=media&token=c9ac80be-94e4-4129-92f7-2dbba891175b'
	}

	handleShowPassword = () => {
		this.setState({showPassword: !this.state.showPassword})
	}

	handleChange = (event) => {
		if(event.target.files[0]) {
			const image = event.target.files[0];
			this.setState({ image })
		}
	}

	handleGetUrl = (imageUrl) => {
		this.setState({ imageUrl })
	}

	render() {
		console.log(this.state)
		const showPassword = this.state.showPassword ? 'eye-slash' : 'eye';
		return (
			<div className={classes["form-holder"]}>
				<h1 className={classes.h1}>Sign up for DogWalker</h1>
				<div className={classes["form-wrapper"]}>
					<Formik
						initialValues={{
							firstname: '',
							lastname: '',
							city: '',
							email: '',
							password: ''
						}}
						validationSchema={RegistrationSchema}
						onSubmit={ async ( values, { resetForm } ) => {
							await console.log(values, '1')
							if (this.state.image) {
								await this.props.firebase.uploadProfileImage(this.state.image, this.handleGetUrl);
							}
							await this.props.firebase
								.doCreateUserWithEmailAndPassword(values.email, values.password)
								.then((authWalker) => {
									console.log(authWalker, '3')
									authWalker.user.updateProfile({
										displayName: `${values.firstname} ${values.lastname}`,
										photoURL: this.state.imageUrl
									})
									return this.props.firebase
										.user(authWalker.user.uid)
										.set({
											name: `${values.firstname} ${values.lastname}`,
											email: values.email,
											city: values.city
										})
								})
								.then(() => {
									resetForm({
										firstname: '',
										lastname: '',
										city: '',
										email: '',
										password: ''
									})
									this.props.history.push("/")
								})
								.catch(error => {
									console.log(error)
								})
						}}
						render={({errors, touched}) => (
							<Form>
								<div className={classes["input-wrapper"]}>
									<label htmlFor="walkerFirstName" className={classes.label}>First name</label>
									<Field
										id="walkerFirstName"
										className={classes.input}
										name="firstname"
										type="text"
									/>
									{errors.firstname && touched.firstname && (
										<div className={classes.error}>{errors.firstname}</div>
									)}
								</div>
								
								<div className={classes["input-wrapper"]}>
									<label htmlFor="walkerLastName" className={classes.label}>Last name</label>
									<Field
										id="walkerLastName"
										className={classes.input}
										name="lastname"
										type="text"
									/>
									{errors.lastname && touched.lastname && (
										<div className={classes.error}>{errors.lastname}</div>
									)}
								</div>

								<div className={classes["input-wrapper"]}>
									<label htmlFor="walkerCity" className={classes.label}>City</label>
									<Field
										id="walkerCity"
										className={classes.input}
										name="city"
										type="text"
									/>
									{errors.city && touched.city && (
										<div className={classes.error}>{errors.city}</div>
									)}
								</div>

								<div className={classes["input-wrapper"]}>
									<label htmlFor="walkerEmail" className={classes.label}>Email</label>
									<Field
										id="walkerEmail"
										className={classes.input}
										name="email"
										type="email"
									/>
									{errors.email && touched.email && (
										<div className={classes.error}>{errors.email}</div>
									)}
								</div>

								<div className={classes["input-wrapper"]}>
									<label htmlFor="walkerPassword" className={classes.label}>Password</label>
									<Field
										id="walkerPassword"
										className={classes.input}
										name="password"
										type={this.state.showPassword ? 'text': 'password'}
									/>
									<button onClick={this.handleShowPassword} type="button" className={classes.eye}><FontAwesomeIcon icon={showPassword} /></button>
									{errors.password && touched.password && (
										<div className={classes.error}>{errors.password}</div>
									)}
								</div>

								<div className={classes["input-wrapper"]}>
									<input className={classes["input-file"]} type="file" onChange={this.handleChange.bind(this)}/>
								</div>

								<button type="submit" className={classes.btn}>Sign up</button>
								<p className={classes.info}>By signing in or signing up, I agree to Rover.com's Terms of Service and Privacy Policy, confirm that I am 18 years of age or older, and consent to receiving email communication.</p>
								<p className={classes["have-account"]}>Already have a Rover account? <Link to="/signin">Sign in now.</Link></p>
							</Form>
						)}
					/>
				</div>
			</div>
		)
	}
}

const Registration = compose(
	withRouter,
	withFirebase,
)(RegistrationBase)

export const SignUpLink = () => (
	<p>
	  Don't have an account? <Link to="/signup">Sign Up</Link>
	</p>
);

export default Registration;