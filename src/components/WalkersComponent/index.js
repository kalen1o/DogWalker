import React, { Component } from 'react';
import classes from './WalkersComponent.module.css';

import { withFirebase } from '../../config/Firebase';
import { Link } from 'react-router-dom';

import { compose } from 'recompose';
import { connect } from 'react-redux';

class WalkersComponentBase extends Component {
	state = {
		loading: true,
		walkers: null
	}

	componentDidMount() {
		this.setState({loading: false})

		this.props.firebase.users()
			.orderByChild('city')
			.equalTo(this.props.search.city)
			.on('value', snapshot => {
			const walkersObject = snapshot.val()

			if(walkersObject) {
				const walkersList = Object.keys(walkersObject).map(key => ({
					...walkersObject[key],
					uid: key
				}))
				let filtered = this.filter(walkersList, this.props.search)
				this.setState({
					loading: true,
					walkers: filtered.length ? filtered : null
				})
			} else {
				this.setState({
					walkers: null,
					loading: true
				})
			}
		})
	}

	filter = (array, filters) => {
		const filterKeys = Object.keys(filters)
		return array.filter(item => {
			return filterKeys.every(key => {
				if(!filters[key].length) return true
				if(key === 'regularity') return true
				if(key === 'dogSizes' || key === 'daysOfTheWeek') {
					return filters[key].every(property => item[key].indexOf(property) !== -1)
				}
				if(key === 'services') {
					return item[key].indexOf(filters[key]) === -1 ? false : true
				} else {
					return item[key] === filters[key] ? true : false
				}
			})
		})
	}

	render() {
		const { walkers, loading } = this.state;
		// console.log(this.props.search, 'search')
		if (!loading) {
			return (
				<div className={classes.loading}>
					<img alt="loading" src="https://cdn.dribbble.com/users/238583/screenshots/3630870/lagif-grande.gif"/>
				</div>
			)
		}
		return (
			<div className={classes["walkers-holder"]}>
				{walkers ? (
					<div className={classes["walkers-wrapper"]}>
						{walkers.map(( item, index ) => (
							<div className={classes["walker-flexbox"]} key={item.uid}>
								<img src={item.photo} alt={item.name} className={classes.avatar} />
								<div className={classes["walker-info-wrapper"]}>
									<div>
										<h1 className={classes.h1}>{++index}. <Link to={`walker/${item.uid}`} className={classes.name}>{item.name}</Link></h1>
										<p className={classes.city}>{item.city}</p>
									</div>
									<div>
										<h2 className={classes.h2}>salary</h2>
										<p className={classes.salary}>{item.salary}$</p>
									</div>
								</div>
							</div>
						))}
					</div>
				) : (
					<div className={classes["without-walkers"]}>
						<h1 className={classes.h1}>We couldn't find any sitters that matched your criteria.</h1>
						<h2 className={classes.h2}>Try changing your search criteria or updating your location.</h2>
					</div>
				)}
			</div>
		)
	}
}

const WalkersComponent = compose(
	withFirebase,
	connect(state => ({search: state.searchParam}), null)
)(WalkersComponentBase)

export default WalkersComponent