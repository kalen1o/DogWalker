import React, { Component } from 'react';
import classes from './ButtonDeleteAccount.module.css';

import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../config/Firebase';

class ButtonDeleteAccountBase extends Component {
	handleClick = () => {
		this.props.firebase.user(this.props.authWalker.uid)
			.remove()

		this.props.firebase.deleteUser()
		this.props.history.push("/signin")
	}
	render() {
		console.log(this.props, 'btn')
		return (
			<div className={classes["delete-btn-wrapper"]}>
				<button type="button" onClick={this.handleClick.bind(this)} className={classes.btn}>Delete this account</button>
			</div>
		)
	}
}

const ButtonDeleteAccount = withRouter(withFirebase(ButtonDeleteAccountBase))

export default ButtonDeleteAccount;