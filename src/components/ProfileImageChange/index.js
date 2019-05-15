import React, { Component } from 'react';
import classes from './ProfileImageChange.module.css';

import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../config/Firebase';

class ProfileImageChangeBase extends Component {
	state = {
		photo: this.props.profileImage
	}

	handleFiles = (event) => {
		let fileReader = new FileReader()
		if (event.target.files[0]) {
			fileReader.readAsDataURL(event.target.files[0])
			fileReader.onload = ( event ) => {
				this.setState({photo: event.target.result})
			}
		} else {
			this.setState({photo: this.props.profileImage})
		}
	}

	handleClick = () => {
		this.props.firebase
			.user(this.props.authWalker.uid)
				.update({
					photo: this.state.photo
				})
	}
	render() {
		console.log(this.state)
		return (
			<div className={classes["profile-image-change-wrapper"]}>
				<h1>
					<img src={`${this.state.photo}`} alt={this.props.authWalker.displayName} className={classes.avatar} />
					{this.props.authWalker.displayName}
				</h1>
				<input type="file" onChange={this.handleFiles.bind(this)} className={classes.input}/>
				<button type="button" onClick={this.handleClick.bind(this)} className={classes.btn}>Set new avatar</button>
			</div>
		)
	}
}

const ProfileImageChange = withRouter(withFirebase(ProfileImageChangeBase))

export default ProfileImageChange