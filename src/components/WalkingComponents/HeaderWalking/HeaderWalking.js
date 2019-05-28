import React, { Component } from 'react'
import classes from '../HeaderWalking/HeaderWalking.module.css'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import setSearchParam from '../../../store/actions/setSearchParam';

class HeaderWalkingBase extends Component {
    onClick = () => {
        const { setSearchParam } = this.props;
        setSearchParam({
            services: "Dog Walking",
            city: "",
            regularity: "One Time",
            startDate: "",
            endDate: "",
            dogSizes: [],
            daysOfTheWeek: [],
            salary: [10, 100]
        })
        this.props.history.push("/search")
    }

    render() {
        return (
            <div className={classes.HeaderWalking}>
            <div className={classes.content}>
                <h1>Dog Walking Made Easy</h1>
                <h4>Welcome to the nation's largest network of dog walkers</h4>

                <div><span onClick={this.onClick} className={classes.headerButton}>Book A Walk</span></div>
            </div>
        </div>
        );
    }
}

const HeaderWalking = compose(
    withRouter,
    connect(null, { setSearchParam })
)(HeaderWalkingBase)

export default HeaderWalking