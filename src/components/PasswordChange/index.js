import React, { Component } from 'react';
import classes from './PasswordChange.module.css';

import { Formik, Form, Field } from "formik";
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../config/Firebase';
import { ChangeSchema } from '../../config/yupConfig';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PasswordChangeBase extends Component {
	state = {
		showPassword: false
	}

	handleShowPassword = () => {
		this.setState({showPassword: !this.state.showPassword})
	}
	render() {
		const showPassword = this.state.showPassword ? 'eye-slash' : 'eye';
		return (
			<div className={classes["change-form-wrapper"]}>
				<Formik
					initialValues={{
						passwordOne: '',
						passwordTwo: '',
						newPassword: ''
					}}
					validationSchema={ChangeSchema}
					onSubmit={( values, { resetForm } ) => {
						console.log(values)
						this.props.firebase
							.doPasswordUpdate(values.newPassword)
							.then(() => {
								resetForm({
									passwordOne: '',
									passwordTwo: '',
									newPassword: ''
								})
							})
							.catch(error => {
								console.log(error)
							})
					}}
					render={({errors, touched}) => (
						<Form>
							<h1 className={classes.h1}>Change Password</h1>
							<div className={classes["input-wrapper"]}>
								<label htmlFor="changePasswordOne" className={classes.label}>Password</label>
								<Field
									id="changePasswordOne"
									className={classes.input}
									name="passwordOne"
									type={this.state.showPassword ? 'text': 'password'}
								/>
								<button onClick={this.handleShowPassword} type="button" className={classes.eye}><FontAwesomeIcon icon={showPassword} /></button>
								{errors.passwordOne && touched.passwordOne && (
									<div className={classes.error}>{errors.passwordOne}</div>
								)}
							</div>

							<div className={classes["input-wrapper"]}>
								<label htmlFor="changePasswordTwo" className={classes.label}>Repeat password</label>
								<Field
									id="changePasswordTwo"
									className={classes.input}
									name="passwordTwo"
									type={this.state.showPassword ? 'text': 'password'}
								/>
								<button onClick={this.handleShowPassword} type="button" className={classes.eye}><FontAwesomeIcon icon={showPassword} /></button>
								{errors.passwordTwo && touched.passwordTwo && (
									<div className={classes.error}>{errors.passwordTwo}</div>
								)}
							</div>
							
							<div className={classes["input-wrapper"]}>
								<label htmlFor="newPassword" className={classes.label}>New password</label>
								<Field
									id="newPassword"
									className={classes.input}
									name="newPassword"
									type={this.state.showPassword ? 'text': 'password'}
								/>
								<button onClick={this.handleShowPassword} type="button" className={classes.eye}><FontAwesomeIcon icon={showPassword} /></button>
								{errors.newPassword && touched.newPassword && (
									<div className={classes.error}>{errors.newPassword}</div>
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

const PasswordChange = withRouter(withFirebase(PasswordChangeBase))

export default PasswordChange;