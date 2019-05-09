import React, { Component } from 'react';
import classes from './Account.module.css';

import PasswordChange from '../../components/PasswordChange';
import InfoChange from '../../components/InfoChange';

import { withAuthorization } from '../../config/Session'; //protected routing

class Account extends Component {
	state = {
		loading: true,
		info: {}
	}

	componentWillMount() {
		this.props.firebase.user(this.props.authWalker.uid).on('value', snapshot => {
			const userInfo = snapshot.val()
			console.log(userInfo)
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
				<div className={classes.account}>
					<img alt="loading" src="https://cdn.dribbble.com/users/238583/screenshots/3630870/lagif-grande.gif"/>
				</div>
			)
		}
		console.log(this.state, 'here acc')
		return (
			<div className={classes.account}>
				<h1 className={classes.h1}>
					{
						this.props.authWalker.providerData[0].providerId === 'password' ? 
							<img src={`${this.state.info.photo}`} alt={this.props.authWalker.displayName} className={classes.avatar} /> : 
							<img src={`${this.props.authWalker.photoURL}`} alt={this.props.authWalker.displayName} className={classes.avatar}/>
					}
					{this.props.authWalker.displayName}
				</h1>
				<InfoChange authWalkerInfo={this.state.info} authWalker={this.props.authWalker}/>
				<PasswordChange />
			</div>
		)
	}
}

const condition = authWalker => !!authWalker;

export default withAuthorization(condition)(Account);