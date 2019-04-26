import React, { Component } from 'react';
import classes from './Registration.module.css';
import { Formik, Field, Form } from "formik";
import { RegistrationSchema } from '../../config/yupConfig';
import {Link} from 'react-router-dom';

class Registration extends Component {
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
						onSubmit={values => {
							console.log(values)
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

								<button type="submit">Sign up</button>
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

export default Registration;