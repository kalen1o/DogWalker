import React, { Component } from 'react';
import classes from './Walker.module.css';

import ReactModal from 'react-modal';
import CreditCardValidation from '../../components/ReusableComponents/CreditCardValidation';

import { withFirebase } from '../../config/Firebase';

import { compose } from 'recompose';
import data from '../../components/constants/data';

class WalkerBase extends Component {
	state = {
		loading: true,
		info: {},
		showModal: false
	}

	handleOpenModal() {
		this.setState({ showModal: true });
	}

	handleCloseModal() {
		this.setState({ showModal: false });
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
					<img alt="loading" src="https://cdn.dribbble.com/users/238583/screenshots/3630870/lagif-grande.gif" />
				</div>
			)
		}

		let services = [];
		this.state.info.services.forEach(service => {
			services.push(data.dog.map(item => {
				return item.text === service ?
					(
						<div key={item.name}>
							<h5 className={classes.h5}>{item.text}</h5>
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
							<h5 className={classes.h5}>{item.dogSize}</h5>
							<p className={classes["description"]}>{item.weight}</p>
						</div>
					) :
					null
			}))
		})
		return (
			<div className={classes.walker}>
				<div className={classes["walker-wrapper"]}>
					<div className={classes["avatar-wrapper"]}>
						<img src={`${this.state.info.photo}`} alt={this.state.info.name} className={classes.avatar} />
					</div>
					<div className={classes["info-wrapper"]}>
						<h1 className={classes.h1}>{this.state.info.name}</h1>
						<h2 className={classes.h2}>{this.state.info.city} {this.state.info.address}</h2>
						<h3 className={classes.h3}>{this.state.info.email}</h3>
						<button type="button" className={classes.btn} onClick={this.handleOpenModal.bind(this)}>Contact {this.state.info.name}</button>
						<ReactModal
							isOpen={this.state.showModal}
							contentLabel="onRequestClose Example"
							onRequestClose={this.handleCloseModal.bind(this)}
							className={classes.Modal}
							overlayClassName={classes.Overlay}
						>
							<div className={classes.ModalWrap}>
								<h1>Your Order!</h1>
								<div className={classes.emailModal}>
									<input type='email' name='email' placeholder='Email Address' value={this.state.info.email} disabled/>
								</div> 
								<CreditCardValidation />
 

								<div className={classes.ButtonOrderComplete}>
									<button onClick={this.handleCloseModal.bind(this)} type='submit'>Confirm</button>
								</div>
							</div>
						</ReactModal>
					</div>
				</div>
				<div className={classes["services-wrapper"]}>
					<h4 className={classes.h4}>Services</h4>
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