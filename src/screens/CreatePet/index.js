import React, { Component } from 'react';
import classes from './CreatePet.module.css';
import { Formik, Field, Form } from "formik";
import { CreatePetSchema } from '../../config/yupConfig';
import {Link} from 'react-router-dom';

class CreatePet extends Component {
	render() {
		return (
			<div className={classes["form-create-pet-holder"]}>
				<h1 className={classes.h1}>Create Pet</h1>
				<div className={classes["form-create-pet-wrapper"]}>
					<Formik
						initialValues={{
							breed: '',
							petname: '',
							petage: 1,
							size: 'small',
							email: '',
							password: ''
						}}
						validationSchema={CreatePetSchema}
						onSubmit={values => {
							console.log(values)
						}}
						render={({errors, touched}) => (
							<Form>
								<div className={classes["input-wrapper"]}>
									<label htmlFor="breed" className={classes.label}>Breed</label>
									<Field
										id="breed"
										className={classes.input}
										name="breed"
										type="text"
									/>
									{errors.breed && touched.breed && (
										<div className={classes.error}>{errors.breed}</div>
									)}
								</div>

								<div className={classes["input-wrapper"]}>
									<label htmlFor="petName" className={classes.label}>Name</label>
									<Field
										id="petName"
										className={classes.input}
										name="petname"
										type="text"
									/>
									{errors.petname && touched.petname && (
										<div className={classes.error}>{errors.petname}</div>
									)}
								</div>

								<div className={classes["input-wrapper"]}>
									<label htmlFor="petage" className={classes.label}>Age</label>
									<Field
										id="petage"
										className={classes.input}
										name="petage"
										type="number"
									/>
									{errors.petage && touched.petage && (
										<div className={classes.error}>{errors.petage}</div>
									)}
								</div>

								<div className={classes["input-wrapper"]}>
									<label htmlFor="size" className={classes.label}>Size</label>
									<Field component="select" id="size" name="size" className={classes.select}>
									<option value="small">Small</option>
									<option value="medium">Medium</option>
									<option value="large">Large</option>
								</Field>
								</div>

								<div className={classes["input-wrapper"]}>
									<label htmlFor="petEmail" className={classes.label}>Email</label>
									<Field
										id="petEmail"
										className={classes.input}
										name="email"
										type="email"
									/>
									{errors.email && touched.email && (
										<div className={classes.error}>{errors.email}</div>
									)}
								</div>

								<div className={classes["input-wrapper"]}>
									<label htmlFor="petPassword" className={classes.label}>Password</label>
									<Field
										id="petPassword"
										className={classes.input}
										name="password"
										type="password"
									/>
									{errors.password && touched.password && (
										<div className={classes.error}>{errors.password}</div>
									)}
								</div>

								<button type="submit" className={classes.btn}>Create Pet</button>
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

export default CreatePet;