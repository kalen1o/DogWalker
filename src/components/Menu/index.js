import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Menu extends Component {
	render() {
		return (
			<div className="menu-icon">
				<FontAwesomeIcon icon="bars" />
			</div>
		)
	}
}

export default Menu;