import React, { Component } from 'react';
import Logo from '../ReusableComponents/Logo';
import IconMenu from '../IconMenu';
import Menu from '../Menu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Header.module.css';

class Header extends Component {
	state = {
		showMenu: false
	}

	showMenu = (event) => {
		event.preventDefault();
		this.setState({ showMenu: true }, () => {
			document.querySelector("." + classes.header).style.borderBottom = "1px solid black"
			document.addEventListener('click', this.closeMenu);
		})
	}

	closeMenu = () => {
		this.setState({ showMenu: false }, () => {
			document.querySelector("." + classes.header).style.borderBottom = ""
			document.removeEventListener('click', this.closeMenu);
		});
	}
	render() {
		return (
			<>
				<header className={classes.header}>
					<div className={classes["header-content-wrapper"]}>
						<Logo />
						<IconMenu showMenu={this.state.showMenu} openMenu={this.showMenu.bind(this)} closeMenu={this.closeMenu.bind(this)} />
						<Menu />
					</div>
				</header>
				{this.state.showMenu ?
					(
						<ul className={classes["mobile-menu"]}>
							<li><Link to="search" ><span className={classes["mobile-menu-elem-wrapper"]}><FontAwesomeIcon icon="search"/></span> Search sitters</Link></li>
							<li><Link to="services" ><span className={classes["mobile-menu-elem-wrapper"]}><FontAwesomeIcon icon="bone"/></span> Our Services</Link></li>
							<li><Link to="create-pet" ><span className={classes["mobile-menu-elem-wrapper"]}><FontAwesomeIcon icon="dog"/></span> Create Pet</Link></li>
							<li><Link to="signup" ><span className={classes["mobile-menu-elem-wrapper"]}><FontAwesomeIcon icon="id-card"/></span> Sign up</Link></li>
							<li><Link to="signin" ><span className={classes["mobile-menu-elem-wrapper"]}><FontAwesomeIcon icon="user-circle"/></span> Sign in</Link></li>
							<li><Link to="help" ><span className={classes["mobile-menu-elem-wrapper"]}><FontAwesomeIcon icon="question-circle"/></span> Help</Link></li>
						</ul>
					)	:
					null
				}
			</>
		)
	}
}

export default Header;