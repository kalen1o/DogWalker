import React, { Component } from 'react';
import classes from './Search.module.css';

import WalkersComponent from '../../components/WalkersComponent';

class Search extends Component {
	render() {
		return (
			<div className={classes["search-wrapper"]}>
				<WalkersComponent />
			</div>
		)
	}
}

export default Search;