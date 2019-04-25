import React, { Component } from 'react';
import Logo from '../ReusableComponents/Logo';
import IconMenu from '../IconMenu';
import Menu from '../Menu';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

class Header extends Component {
	state = {
		showMenu: false
	}

	showMenu = (event) => {
		event.preventDefault();
		this.setState({ showMenu: true }, () => {
			document.querySelector(".header").style.borderBottom = "1px solid black"
			document.addEventListener('click', this.closeMenu);
		})
	}

	closeMenu = () => {
		this.setState({ showMenu: false }, () => {
			document.querySelector(".header").style.borderBottom = ""
			document.removeEventListener('click', this.closeMenu);
		});
	}
	render() {
		return (
			<>
				<header className="header">
					<div className="header-content-wrapper">
						<Logo />
						<IconMenu showMenu={this.state.showMenu} openMenu={this.showMenu.bind(this)} closeMenu={this.closeMenu.bind(this)} />
						<Menu />
					</div>
				</header>
				{this.state.showMenu ?
					(
						<ul className="mobile-menu">
							<li><Link to="search" ><span className="menu-elem-wrapper"><FontAwesomeIcon icon="search"/></span> Search sitters</Link></li>
							<li><Link to="services" ><span className="menu-elem-wrapper"><FontAwesomeIcon icon="bone"/></span> Our Services</Link></li>
							<li><Link to="create-client" ><span className="menu-elem-wrapper"><FontAwesomeIcon icon="dog"/></span> Create Pet</Link></li>
							<li><Link to="signup" ><span className="menu-elem-wrapper"><FontAwesomeIcon icon="id-card"/></span> Sign up</Link></li>
							<li><Link to="signin" ><span className="menu-elem-wrapper"><FontAwesomeIcon icon="user-circle"/></span> Sign in</Link></li>
							<li><Link to="help" ><span className="menu-elem-wrapper"><FontAwesomeIcon icon="question-circle"/></span> Help</Link></li>
						</ul>
					)	:
					null
				}
			</>
		)
	}
}

export default Header;