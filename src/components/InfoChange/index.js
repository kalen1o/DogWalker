import React, { Component } from 'react';
import classes from './InfoChange.module.css';

import { Formik, Form, Field } from "formik";
import { withRouter } from 'react-router-dom';

import { withFirebase } from '../../config/Firebase';
import { InfoChangeSchema } from '../../config/yupConfig';

import data from '../constants/data';
import Checkbox from '../ReusableComponents/Checkbox';

class InfoChangeBase extends Component {
	render() {
		let services = data.dog.map(item => (
			<Checkbox name="checkboxes" value={item.text} icon={item.icon} box={classes.box} key={item.text}/>
		))
		let dogSizes = data.weights.map(item => (
			<Checkbox name="dogSizes" value={item.dogSize} text={item.weight} box={classes.box} key={item.dogSize} />
		))
		return (
			<div className={classes["info-change-form-wrapper"]}>
				<h1 className={classes.h1}>Set account info</h1>
				<div className={classes["info-change-form-holder"]}></div>
				<Formik
					initialValues={{
						city: this.props.authWalkerInfo.city,
						checkboxes: this.props.authWalkerInfo.services,
						dogSizes: this.props.authWalkerInfo.dogSizes
					}}
					validationSchema={InfoChangeSchema}
					onSubmit={values => {
						this.props.firebase
							.user(this.props.authWalker.uid)
								.update({
									city: values.city,
									services: values.checkboxes,
									dogSizes: values.dogSizes
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