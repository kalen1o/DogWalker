import React, { Component } from 'react'
import classes from '../HeaderDogBoarding/HeaderDogBoarding.module.css'


class HeaderDogBoarding extends Component {

    render() {
        return (
            <div className={classes.HeaderDogBoarding}>
            <div className={classes.content}>
                <h1>No more kennels—the next level of<br /> dog boarding is here</h1>
                <h4>Over 65,000 sitters have listed their services on Rover, making it easy to<br />
                    discover your dog's home away from home</h4>

                <div><a href='#' className={classes.headerButton}>Book Dog Boarding</a></div>
            </div>
        </div>
        );
    }
}


export default HeaderDogBoarding