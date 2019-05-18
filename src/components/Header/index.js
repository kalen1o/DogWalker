import React, { Component } from 'react';
import Logo from '../ReusableComponents/Logo';
import IconMenu from '../IconMenu';
import Menu from '../Menu';
import SignOutButtton from '../SignOutButton';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Header.module.css';

import { AuthWalkerContext } from '../../config/Session';

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
			<AuthWalkerContext.Consumer>
				{authWalker => (
					<>
						<header className={classes.header}>
							<div className={classes["header-content-wrapper"]}>
								<Logo />
								<IconMenu showMenu={this.state.showMenu} openMenu={this.showMenu.bind(this)} closeMenu={this.closeMenu.bind(this)} />
								<Menu authWalker={authWalker}/>
							</div>
						</header>
						{this.state.showMenu ?
							(
								<ul className={classes["mobile-menu"]}>
									<li><Link to="search" ><span className={classes["mobile-menu-elem-wrapper"]}><FontAwesomeIcon icon="search"/></span> Search sitters</Link></li>
									<li><Link to="services" ><span className={classes["mobile-menu-elem-wrapper"]}><FontAwesomeIcon icon="bone"/></span> Our Services</Link></li>
									{authWalker ? <ButtonAuth /> : <ButtonNonAuth />}
									<li><Link to="help" ><span className={classes["mobile-menu-elem-wrapper"]}><FontAwesomeIcon icon="question-circle"/></span> Help</Link></li>
								</ul>
							)	:
							null
						}
					</>
				)}
			</AuthWalkerContext.Consumer>
		)
	}
}

export const ButtonNonAuth = () => (
	<>
		<li><Link to="signup" ><span className={classes["mobile-menu-elem-wrapper"]}><FontAwesomeIcon icon="id-card"/></span> Sign up</Link></li>
		<li><Link to="signin" ><span className={classes["mobile-menu-elem-wrapper"]}><FontAwesomeIcon icon="user-circle"/></span> Sign in</Link></li>
	</>
)

export const ButtonAuth = () => (
	<>
		<li><Link to="account" ><span className={classes["mobile-menu-elem-wrapper"]}><FontAwesomeIcon icon="user-cog"/></span> Account</Link></li>
		<li>
			<SignOutButtton />
		</li>
	</>
)

export default Header;