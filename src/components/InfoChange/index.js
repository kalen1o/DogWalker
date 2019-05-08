import React, { Component } from 'react';
import classes from './InfoChange.module.css';

import { Formik, Form, Field } from "formik";
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../config/Firebase';
import { InfoChangeSchema } from '../../config/yupConfig';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class InfoChangeBase extends Component {
	state = {
		info: {}
	}

	componentWillMount() {
		this.props.firebase.user(this.props.authWalker.uid).on('value', snapshot => {
			const userInfo = snapshot.val()
			console.log(userInfo)
			this.setState({
				info: userInfo
			})
		})
	}

	componentWillUnmount() {
		this.props.firebase.user().off();
	}
	render() {
		console.log(this.state)
		return (
			<div className={classes["info-change-form-wrapper"]}>
				<h1 className={classes.h1}>Change account info</h1>
				<div className={classes["info-change-form-holder"]}></div>
				<Formik
					initialValues={{
						city: ''
					}}
					validationSchema={InfoChangeSchema}
					onSubmit={values => {
						this.props.firebase
							.user(this.props.authWalker.uid)
								.update({
									city: values.city
						})
					}}
					render={({errors, touched}) => (
						<Form>
							<div className={classes["input-wrapper"]}>
									<label htmlFor="walkerCityChange" className={classes.label}>City</label>
									<Field
										id="walkerCityChange"
										className={classes.input}
										name="city"
										type="text"
									/>
									{errors.city && touched.city && (
										<div className={classes.error}>{errors.city}</div>
									)}
								</div>

								<button type="submit" className={classes.btn}>Sign up</button>
						</Form>
					)}
				/>
			</div>
		)
	}
}

const InfoChange = withRouter(withFirebase(InfoChangeBase))

export default InfoChange;