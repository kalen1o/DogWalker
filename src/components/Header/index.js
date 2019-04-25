import React, { Component } from 'react';
import Logo from '../ReusableComponents/Logo';
import Menu from '../Menu';
import './style.css'

class Header extends Component {
	render() {
		return (
			<header className="header">
				<Logo />
				<Menu />
			</header>
		)
	}
}

export default Header;