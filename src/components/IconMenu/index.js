import React, { Component } from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class IconMenu extends Component {
	render() {
		return (
			<>
				<div className="menu-icon" onClick={this.props.openMenu}>
					<FontAwesomeIcon icon="bars" />
				</div>
			</>
		)
	}
}

export default IconMenu;