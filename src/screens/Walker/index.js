import React, { Component } from 'react';
import classes from './Walker.module.css';

import { withFirebase } from '../../config/Firebase';

import { compose } from 'recompose';
import data from '../../components/constants/data';

class WalkerBase extends Component {
	state = {
		loading: true,
		info: {}
	}

	componentWillMount() {
		this.props.firebase.user(this.props.match.params.uid).on('value', snapshot => {
			const userInfo = snapshot.val()
			this.setState({
				loading: false,
				info: userInfo
			})
		})
	}

	componentWillUnmount() {
		this.props.firebase.user().off();
	}

	render() {
		const { loading } = this.state;

		if (loading) {
			return (
				<div className={classes.flexwrapper}>
					<img alt="loading" src="https://cdn.dribbble.com/users/238583/screenshots/3630870/lagif-grande.gif"/>
				</div>
			)
		}

		let services = [];
		this.state.info.services.forEach(service => {
			services.push(data.dog.map(item => {
				return item.text === service ? 
					(
						<div key={item.name}>
							<h4 className={classes.h4}>{item.text}</h4>
							<p className={classes["description"]}>{item.description}</p>
						</div>
					) :
					null
			}))
		})

		let dogSizes = [];
		this.state.info.dogSizes.forEach(size => {
			dogSizes.push(data.weights.map(item => {
				return item.dogSize === size ?
					(
						<div key={item.dogSize}>
							<h4 className={classes.h4}>{item.dogSize}</h4>
							<p className={classes["description"]}>{item.weight}</p>
						</div>
					) :
					null
			}))
		})

		console.log(this.state.info, 'pla')
		return (
			<div className={classes.walker}>
				<div className={classes["walker-wrapper"]}>
					<div className={classes["avatar-wrapper"]}>
						<img src={`${this.state.info.photo}`} alt={this.state.info.name} className={classes.avatar}/>
					</div>
					<div className={classes["info-wrapper"]}>
						<h1 className={classes.h1}>{this.state.info.name}</h1>
						<h2 className={classes.h2}>{this.state.info.city}</h2>
						<button type="button" className={classes.btn}>Contact {this.state.info.name}</button>
					</div>
				</div>
				<div className={classes["services-wrapper"]}>
					<h3 className={classes.h3}>Services</h3>
					{services}
					<p className={classes.salary}>{this.state.info.salary}$</p>
				</div>
				<div className={classes["size-wrapper"]}>
					{dogSizes}
				</div>
			</div>
		)
	}
}

const Walker = compose(
	withFirebase,
)(WalkerBase)

export default Walker;