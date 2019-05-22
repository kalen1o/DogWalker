import React, { Component } from 'react'
import classes from './JoinUs.module.css'
import android from '../../images/store-button/android/android.svg'
import ios from '../../images/store-button/ios/ios.svg'

class JoinUs extends Component {

    render() {
        return (
            <div className={classes.JoinUs}>
                <h3>Stay in touch with the Rover app</h3> 
                <div className={classes.storeButtonsCont}>
                    <a href='#'><img src={ios} width='' height=''/></a>
                    <a href='#'><img src={android} width='' height=''/></a>
                </div>
                <div className={classes.DevicesImage}></div>
                    <h3>We have pet sitters and dog walkers in 10,000+ cities—join us!</h3>
                    <div ><a href='#' className={classes.JoinUsButton}>Become a Pet Sitter or Dog Walker</a></div>
            </div>
        );
    }
}


export default JoinUs