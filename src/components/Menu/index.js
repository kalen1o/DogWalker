import React, { Component } from 'react';
import classes from './Menu.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ButtonNonAuth, ButtonAuth } from '../Header';

class Menu extends Component {
	render() {
		return (
			<>
				<ul className={classes["left-menu"]}>
					<li><Link to="/search" ><span className={classes["menu-elem-wrapper"]}><FontAwesomeIcon icon="search"/></span> Search sitters</Link></li>
					<li><Link to="/services" ><span className={classes["menu-elem-wrapper"]}><FontAwesomeIcon icon="bone"/></span> Our Services</Link></li>
				</ul>
				<ul className={classes["right-menu"]}>
					{this.props.authWalker ? <ButtonAuth /> : <ButtonNonAuth />}
					<li><Link to="/help" ><span className={classes["menu-elem-wrapper"]}><FontAwesomeIcon icon="question-circle"/></span> Help</Link></li>
				</ul>
			</>
		)
	}
}

export default Menu;