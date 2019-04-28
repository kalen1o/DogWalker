import React, { Component } from 'react';
import classes from './Registration.module.css';
import { Formik, Form, Field } from "formik";
import { RegistrationSchema } from '../../config/yupConfig';
import {Link, withRouter} from 'react-router-dom';

import { withFirebase } from '../../config/Firebase';
import { compose } from 'recompose';

class RegistrationBase extends Component {
	render() {
		return (
			<div className={classes["form-holder"]}>
				<h1 className={classes.h1}>Sign up for DogWalker</h1>
				<div className={classes["form-wrapper"]}>
					<Formik
						initialValues={{
							firstname: '',
							lastname: '',
							email: '',
							password: ''
						}}
						validationSchema={RegistrationSchema}
						onSubmit={( values, { resetForm } ) => {
							console.log(values)
							this.props.firebase
								.doCreateUserWithEmailAndPassword(values.email, values.password)
								.then((authWalker) => {
									console.log(authWalker)
									return this.props.firebase
										.user(authWalker.user.uid)
										.set({
											name: `${values.firstname} ${values.lastname}`,
											email: values.email
										})
								})
								.then(() => {
									resetForm({
										firstname: '',
										lastname: '',
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
										type="password"
									/>
									{errors.password && touched.password && (
										<div className={classes.error}>{errors.password}</div>
									)}
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