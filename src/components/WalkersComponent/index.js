import React, { Component } from 'react';
import classes from './WalkersComponent.module.css';

import { withRouter } from 'react-router-dom';
import { withFirebase } from '../../config/Firebase';

class WalkersComponentBase extends Component {
	state = {
		loading: true,
		walkers: null
	}

	componentDidMount() {
		this.setState({loading: false})

		this.props.firebase.users()
			.orderByChild('city')
			.equalTo('Kiev')
			.on('value', snapshot => {
			const walkersObject = snapshot.val()

			if(walkersObject) {
				const walkersList = Object.keys(walkersObject).map(key => ({
					...walkersObject[key],
					uid: key
				}))
				console.log(walkersList, '11111111111')
				this.setState({
					loading: true,
					walkers: walkersList
				})
			} else {
				this.setState({
					walkers: null,
					loading: true
				})
			}
		})
	}

	render() {
		const { walkers, loading } = this.state;
		console.log(this.state)
		return (
			<div>
				{!loading && <div>Loading...</div>}
				{walkers ? (
					<div>Hello</div>
				) : (
					<div>
						We couldn't find any sitters that matched your criteria.
						Try changing your search criteria or updating your location.
					</div>
				)}
			</div>
		)
	}
}

const WalkersComponent = withRouter(withFirebase(WalkersComponentBase))

export default WalkersComponent