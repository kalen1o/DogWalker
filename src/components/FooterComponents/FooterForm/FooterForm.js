import React, { Component } from 'react'
import classes from './FooterForm.module.css'

class FooterForm extends Component {
	render() {
		return (
			<div className={classes.FooterForm}>
				<form>
					<h4>Get cute puppies in your inbox</h4>
					<input type='email' name='email' placeholder='Email Address' />
					<button type='submit'>Submit</button>
					<p>By providing my e-mail address, I consent to receive marketing <br />
						communications from Rover.com and its affiliates. <a href='https://www.google.ru'>Privacy Policy</a></p>
				</form>
			</div>
		)
	}
}

export default FooterForm