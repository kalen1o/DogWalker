import React, { Component } from 'react'
import classes from './DogWalkerBack.module.css'
import protection from '../../images/staticpages_icons/protection.png'
import money from '../../images/staticpages_icons/money.png'
import insurance from '../../images/staticpages_icons/insurance.png'
import support from '../../images/staticpages_icons/support.png'


class DogWalkerBack extends Component {

    render() {
        return (
            <div className={classes.DogWalkerBackWrap}>
                <h3>We've got your (and your dog's) back</h3>
                <div className={classes.DogWalkerBack}>
                    <div className={classes.DogWalkerBackItem}>
                        <img src={money} />
                        <h4>Cashless payments</h4>
                        <p>Book and pay, all through Rover’s safe and secure platform—no cash, check, or tips necessary.</p>
                    </div>
                    <div className={classes.DogWalkerBackItem}> 
                        <img src={insurance} />
                        <h4>Rover Guarantee</h4>
                        <p>Every stay booked through Rover is covered by the Rover Guarantee. Learn More</p>
                    </div>
                    <div className={classes.DogWalkerBackItem}>
                        <img src={protection} />
                        <h4>Reservation protection</h4>
                        <p>It doesn't happen often, but if your sitter has to cancel, we’ll work with you to find a new sitter.</p>
                    </div>
                    <div className={classes.DogWalkerBackItem}>
                        <img src={support} />
                        <h4>World-class support</h4>
                        <p>We're pet fanatics headquartered in Seattle, and you can drop us a note anytime.</p>
                    </div>
                </div>
            </div>
        );
    }
}


export default DogWalkerBack