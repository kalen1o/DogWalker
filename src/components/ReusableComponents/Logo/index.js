import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './style.css';

const Logo = () => (
	<span className="logo-wrapper">
		<Link to="/" className="logo">
			<FontAwesomeIcon icon="paw" /> DogWalker
		</Link>
	</span>
)

export default Logo;