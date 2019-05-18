import React, { Component } from 'react';
import classes from './Walker.module.css';

import { withFirebase } from '../../config/Firebase';

import { compose } from 'recompose';
import { connect } from 'react-redux';

class WalkerBase extends Component {
	render() {
		console.log(this.props, 'pla')
		return (
			<div>Hello</div>
		)
	}
}

const Walker = compose(
	withFirebase,
	connect(state => ({search: state.searchParam}), null)
)(WalkerBase)

export default Walker;