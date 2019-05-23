import React, { Component } from 'react'
import classes from '../HeaderWalking/HeaderWalking.module.css'
import { Link } from 'react-router-dom';


class HeaderWalking extends Component {

    render() {
        return (
            <div className={classes.HeaderWalking}>
            <div className={classes.content}>
                <h1>Dog Walking Made Easy</h1>
                <h4>Welcome to the nation's largest network of dog walkers</h4>

                <div><Link to='/search' className={classes.headerButton}>Book A Walk</Link></div>
            </div>
        </div>
        );
    }
}


export default HeaderWalking