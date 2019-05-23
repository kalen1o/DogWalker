import React, { Component } from 'react'
import classes from '../HeaderDogBoarding/HeaderDogBoarding.module.css'
import { Link } from 'react-router-dom';

class HeaderDogBoarding extends Component {

    render() {
        return (
            <div className={classes.HeaderDogBoarding}>
            <div className={classes.content}>
                <h1>No more kennels—the next level of<br /> dog boarding is here</h1>
                <h4>Over 65,000 sitters have listed their services on Rover, making it easy to<br />
                    discover your dog's home away from home</h4>

                <div><Link to='/search' className={classes.headerButton}>Book Dog Boarding</Link></div>
            </div>
        </div>
        );
    }
}


export default HeaderDogBoarding