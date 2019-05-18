import React, { Component } from 'react';
import classes from './Search.module.css';

import WalkersComponent from '../../components/WalkersComponent';
import Map from '../../components/Map';

class Search extends Component {
	render() {
		return (
			<div className={classes["search-wrapper"]}>
				<WalkersComponent />
				{/* <Map 
					containerElement={<div style={{height: `100%`}} />}
					mapElement={<div style={{height: `100%`}} />}
				/> */}
			</div>
		)
	}
}

export default Search;