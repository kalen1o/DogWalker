import React, { Component } from 'react';
import classes from './Menu.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Menu extends Component {
	render() {
		return (
			<>
				<ul className={classes["left-menu"]}>
					<li><Link to="search" ><span className={classes["menu-elem-wrapper"]}><FontAwesomeIcon icon="search"/></span> Search sitters</Link></li>
					<li><Link to="services" ><span className={classes["menu-elem-wrapper"]}><FontAwesomeIcon icon="bone"/></span> Our Services</Link></li>
					<li><Link to="create-pet" ><span className={classes["menu-elem-wrapper"]}><FontAwesomeIcon icon="dog"/></span> Create Pet</Link></li>
				</ul>
				<ul className={classes["right-menu"]}>
					<li><Link to="signup" ><span className={classes["menu-elem-wrapper"]}><FontAwesomeIcon icon="id-card"/></span> Sign up</Link></li>
					<li><Link to="signin" ><span className={classes["menu-elem-wrapper"]}><FontAwesomeIcon icon="user-circle"/></span> Sign in</Link></li>
					<li><Link to="help" ><span className={classes["menu-elem-wrapper"]}><FontAwesomeIcon icon="question-circle"/></span> Help</Link></li>
				</ul>
			</>
		)
	}
}

export default Menu;