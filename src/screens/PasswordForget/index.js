import React, { Component } from 'react';
import classes from './PasswordForget.module.css';

import { Formik, Form, Field } from "formik";
import { ForgetSchema } from '../../config/yupConfig';

import {Link} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../config/Firebase';

class PasswordForgetBase extends Component {
	render() {
		console.log(this.props)
		return (
			<div className={classes["forget-form-wrapper"]}>
				<Formik
					initialValues={{
						email: ''
					}}
					validationSchema={ForgetSchema}
					onSubmit={( values, { resetForm } ) => {
						console.log(values)
						this.props.firebase
							.doPasswordReset(values.email)
							.then(() => {
								resetForm({
									email: ''
								})
								this.props.history.push("/signin")
							})
					}}
					render={({errors, touched}) => (
						<Form>
							<div className={classes["input-wrapper"]}>
								<label htmlFor="forgetEmail" className={classes.label}>Email</label>
								<Field
									id="forgetEmail"
									className={classes.input}
									name="email"
									type="email"
								/>
								{errors.email && touched.email && (
									<div className={classes.error}>{errors.email}</div>
								)}
							</div>

							<button type="submit" className={classes.btn}>Sign in</button>
						</Form>
					)}
				/>
			</div>
		)
	}
}

export const PasswordForgetLink = () => (
	<p className={classes.link}>
	  <Link to="password-forget">Forgot Password?</Link>
	</p>
);

export const PasswordForget = withRouter(withFirebase(PasswordForgetBase))

const PasswordForgetPage = () => (
	<div className={classes["forget-form-holder"]}>
		<h1 className={classes.h1}>Forget password</h1>
		<PasswordForget />
	</div>
)

export default PasswordForgetPage;