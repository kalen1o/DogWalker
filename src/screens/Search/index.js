import React, { Component } from 'react';
import classes from './Search.module.css';

import WalkersComponent from '../../components/WalkersComponent';
import SearchForm from '../../components/MainContent/SearchForm/SearchForm'

class Search extends Component {
	render() {
		return (
			<div className={classes["search-wrapper"]}>
				<SearchForm />
				<WalkersComponent />
			</div>
		)
	}
}

export default Search;
