import React, { Component } from 'react'
import classes from './FooterSocial.module.css'




class FooterSocial extends Component {
    render() {
        return (
            <div className={classes.FooterSocial}>
                <div className={classes.social_description}>
                    <a href='#' target='_blank'><p><span>visit our blog</span><br />
                        The dog people</p></a>
                </div>
                <div className={classes.social_links}>
                    <a href="https://uk-ua.facebook.com/" target='_blank' className={classes.link_facebook}>
                        <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="https://www.instagram.com/" target='_blank' className={classes.link_instagram}>
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/" target='_blank' className={classes.link_twitter}>
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.pinterest.com/" target='_blank' className={classes.link_pinterest}>
                        <i className="fa fa-pinterest-p"></i>
                    </a>
                </div>
            </div>
        )
    }
}

export default FooterSocial