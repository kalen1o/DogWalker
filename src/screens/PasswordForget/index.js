import React, { Component } from 'react';
import classes from './PasswordForget.module.css';

import { Formik, Form, Field } from "formik";
import { ForgetSchema } from '../../config/yupConfig';

import DefaultInput from '../../components/ReusableComponents/DefaultInput';

import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../config/Firebase';

import { toast } from 'react-toastify';

class PasswordForgetBase extends Component {
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
							.catch(error => {
								toast.error(`${error.message}`)
							})
					}}
					render={({errors, touched}) => (
						<Form>
							<DefaultInput id="forgetEmail" label="Email" name="email" type="email" errors={errors} touched={touched} />

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