import React, { Component } from 'react';
import classes from './CreatePet.module.css';
import { Formik, Field, Form } from "formik";
import { CreatePetSchema } from '../../config/yupConfig';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CreatePet extends Component {
	state = {
		showPassword: false
	}

	handleShowPassword = () => {
		this.setState({showPassword: !this.state.showPassword})
	}
	render() {
		const showPassword = this.state.showPassword ? 'eye-slash' : 'eye';
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
						onSubmit={( values, { resetForm } ) => {
							console.log(values)
							resetForm({
								breed: '',
								petname: '',
								petage: 1,
								size: 'small',
								email: '',
								password: ''
							})
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
									<label htmlFor="size" className={classes.label}>Size</label>
									<Field component="select" id="size" name="size" className={classes.select}>
									<option value="small">Small</option>
									<option value="medium">Medium</option>
									<option value="large">Large</option>
									<option value="giant">Giant</option>
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
										type={this.state.showPassword ? 'text': 'password'}
									/>
									<button onClick={this.handleShowPassword} type="button" className={classes.eye}><FontAwesomeIcon icon={showPassword} /></button>
									{errors.password && touched.password && (
										<div className={classes.error}>{errors.password}</div>
									)}
								</div>

								<button type="submit" className={classes.btn}>Create Pet</button>
							</Form>
						)}
					/>
				</div>
			</div>
		)
	}
}

export default CreatePet;