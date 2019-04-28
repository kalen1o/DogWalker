import React, { Component } from 'react';
import classes from './Account.module.css';

import PasswordChange from '../../components/PasswordChange';

import { AuthWalkerContext, withAuthorization } from '../../config/Session'; //protected routing

class Account extends Component {
	render() {
		return (
			<AuthWalkerContext.Consumer>
				{authWalker => {
					console.log(authWalker)
					return (
						(
							<div className={classes.account}>
							<h1>Account Page: {authWalker.email}</h1>
							<PasswordChange />
						</div>
						)
					)
				}}
			</AuthWalkerContext.Consumer>
		)
	}
}

const condition = authWalker => !!authWalker;

export default withAuthorization(condition)(Account);