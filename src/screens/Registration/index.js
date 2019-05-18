import React, { Component } from 'react';
import classes from './Registration.module.css';
import { Formik, Form, Field } from "formik";
import { RegistrationSchema } from '../../config/yupConfig';
import {Link, withRouter} from 'react-router-dom';

import Checkbox from '../../components/ReusableComponents/Checkbox';
import DefaultInput from '../../components/ReusableComponents/DefaultInput';
import data from '../../components/constants/data'

import { withFirebase } from '../../config/Firebase';
import { compose } from 'recompose';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { toast } from 'react-toastify';

class RegistrationBase extends Component {
	state = {
		showPassword: false,
		imageSrc: ''
	}

	handleShowPassword = () => {
		this.setState({showPassword: !this.state.showPassword})
	}

	handleFiles = (event) => {
		let fileReader = new FileReader()
		if (event.target.files[0]) {
			fileReader.readAsDataURL(event.target.files[0])
			fileReader.onload = ( event ) => {
				this.setState({imageSrc: event.target.result})
			}
		} else {
			this.setState({imageSrc: ''})
		}
	}

	render() {
		let services = data.dog.map(item => (
			<Checkbox name="checkboxes" value={item.text} icon={item.icon} box={classes.box} key={item.text}/>
		))
		let dogSizes = data.weights.map(item => (
			<Checkbox name="dogSizes" value={item.dogSize} text={item.weight} box={classes["box-dog"]} key={item.dogSize} />
		))
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
							salary: 10,
							checkboxes: [],
							dogSizes: [],
							email: '',
							password: ''
						}}
						validationSchema={RegistrationSchema}
						onSubmit={ ( values, { resetForm } ) => {
							console.log(values)
							this.props.firebase
								.doCreateUserWithEmailAndPassword(values.email, values.password)
								.then((authWalker) => {
									console.log(authWalker, '3')
									authWalker.user.updateProfile({
										displayName: `${values.firstname} ${values.lastname}`
									})
									return this.props.firebase
										.user(authWalker.user.uid)
										.set({
											name: `${values.firstname} ${values.lastname}`,
											email: values.email,
											city: values.city,
											salary: values.salary,
											photo: this.state.imageSrc ? this.state.imageSrc : 'https://firebasestorage.googleapis.com/v0/b/dogwalker-88634.appspot.com/o/nouser.png?alt=media&token=c9ac80be-94e4-4129-92f7-2dbba891175b',
											services: values.checkboxes,
											dogSizes: values.dogSizes
										})
								})
								.then(() => {
									resetForm({
										firstname: '',
										lastname: '',
										city: '',
										salary: 10,
										checkboxes: [],
										dogSizes: [],
										email: '',
										password: ''
									})
									this.props.history.push("/")
								})
								.catch(error => {
									toast.error(`${error.message}`)
								})
						}}
						render={({errors, touched}) => (
							<Form>
								<DefaultInput id="walkerFirstName" label="Firstname" name="firstname" type="text" errors={errors} touched={touched} />
								
								<DefaultInput id="walkerLastName" label="Lastname" name="lastname" type="text" errors={errors} touched={touched} />

								<DefaultInput id="walkerCity" label="City and Adress" name="city" type="text" errors={errors} touched={touched} />

								<DefaultInput id="walkerSalary" label="Salary" name="salary" type="number" errors={errors} touched={touched} />

								<div className={classes["input-wrapper"]}>
									<label className={classes.label}>Services</label>
									<div className={classes["checkboxes-wrapper"]}>
										{services}
									</div>
									{errors.checkboxes && touched.checkboxes && (
										<div className={classes.error}>{errors.checkboxes}</div>
									)}
								</div>

								<div className={classes["input-wrapper"]}>
									<label className={classes.label}>Dog sizes</label>
									<div className={classes["checkboxes-wrapper"]}>
										{dogSizes}
									</div>
									{errors.dogSizes && touched.dogSizes && (
										<div className={classes.error}>{errors.dogSizes}</div>
									)}
								</div>

								<DefaultInput id="walkerEmail" label="Email" name="email" type="email" errors={errors} touched={touched} />

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

								<div className={classes["file-wrapper"]}>
									<input type="file" onChange={this.handleFiles.bind(this)} className={classes.inputfile} id="file"/>
									<label htmlFor="file">
										<FontAwesomeIcon icon="download" /> Choose a file
									</label>
									<img src={this.state.imageSrc} className={classes.file} alt="" />
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