import React, { Component } from 'react'
import classes from './FooterTop.module.css';
import FooterList from '../FooterList/FooterList.js';
import FooterListClick from '../FooterListClick/FooterListClick.js';

class FooterTop extends Component {
    state = {
        listLearnMore: [
            { id: 1, title: 'Learn More' },
            { id: 2, content: 'Read Our Blog' },
            { id: 3, content: 'DogWalker Q&A Community' },
            { id: 4, content: 'DogWalker Store' },
            { id: 5, content: 'DogWalker Guarantee' },
            { id: 6, content: 'Safety' },
            { id: 7, content: 'Sit a Dog, Save a Life' },

        ],

        listHelp: [
            { id: 1, title: 'Need Help?' },
            { id: 2, content: 'Help Center' }
        ],

        listAboutMore: [
            { id: 1, title: 'About DogWalker' },
            { id: 2, content: 'About Us' },
            { id: 3, content: 'Contact Us' },
            { id: 4, content: 'Joining Forces' },
            { id: 5, content: 'Get The App' },
            { id: 6, content: 'Press' },
            { id: 7, content: 'Careers' },
            { id: 8, content: 'Partners' },
            { id: 9, content: 'Privacy Policy' },
            { id: 10, content: 'Cookie Policy' },
            { id: 11, content: 'Terms of Service' },
            { id: 12, content: 'Interest-Based Ads' },
            { id: 13, content: 'DogWalker UK' }
        ],

        listTopCities: [
            { id: 1, title: 'Top DogWalker Cities' },
            { id: 2, content: 'Vinnytsia' },
            { id: 3, content: 'Dnipropetrovsk' },
            { id: 4, content: 'Donetsk' },
            { id: 5, content: 'Zhytomyr' },
            { id: 6, content: 'Zaporizhzhia' },
            { id: 7, content: 'Ivano-Frankivsk' },
            { id: 8, content: 'Kiev' },
            { id: 9, content: 'Kirovohrad' },
            { id: 10, content: 'Luhansk' },
            { id: 11, content: 'Lutsk' },
            { id: 12, content: 'Lviv' },
            { id: 13, content: 'Mykolaiv' },
            { id: 14, content: 'Odesa' },
        ],

        listTopCities2: [
            { id: 1, title: <span className={classes.span}>.</span>},
            { id: 15, content: 'Poltava' },
            { id: 16, content: 'Rivne' },
            { id: 17, content: 'Sevastopol' },
            { id: 18, content: 'Simferopol' },
            { id: 19, content: 'Sumy' },
            { id: 20, content: 'Ternopil' },
            { id: 21, content: 'Uzhhorod' },
            { id: 22, content: 'Kharkiv' },
            { id: 23, content: 'Kherson' },
            { id: 24, content: 'Khmelnytskyi' },
            { id: 25, content: 'Cherkasy' },
            { id: 26, content: 'Chernivtsi' },
            { id: 27, content: 'Chernihiv' }
        ]

    }
    render() {
        return (
            <div className={classes.FooterTop}>
                <div className={classes.ListLearnMore}>
                    <FooterList list={this.state.listLearnMore} />
                    <FooterList list={this.state.listHelp} />
                </div>
                <div className={classes.ListAboutRover}>
                    <FooterList list={this.state.listAboutMore} />
                </div>
                <div className={classes.ListCities}>
                    <FooterListClick list={this.state.listTopCities}/>
                    <FooterListClick list={this.state.listTopCities2} />
                </div>
            </div>
        );
    }
}


export default FooterTop
