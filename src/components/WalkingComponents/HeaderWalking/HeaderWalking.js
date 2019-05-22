import React, { Component } from 'react'
import classes from '../HeaderWalking/HeaderWalking.module.css'


class HeaderWalking extends Component {

    render() {
        return (
            <div className={classes.HeaderWalking}>
            <div className={classes.content}>
                <h1>Dog Walking Made Easy</h1>
                <h4>Welcome to the nation's largest network of dog walkers</h4>

                <div><a href='#' className={classes.headerButton}>Book A Walk</a></div>
            </div>
        </div>
        );
    }
}


export default HeaderWalking