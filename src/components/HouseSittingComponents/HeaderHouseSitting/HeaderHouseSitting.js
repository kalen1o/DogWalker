import React, { Component } from 'react'
import classes from '../HeaderHouseSitting/HeaderHouseSitting.module.css'
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import setSearchParam from '../../../store/actions/setSearchParam';

class HeaderHouseSittingBase extends Component {
    onClick = () => {
        const { setSearchParam } = this.props;
        setSearchParam({
            services: "House Sitting",
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
            <div className={classes.HeaderHouseSitting}>
            <div className={classes.content}>
                <h1>Your perfect pet sitter is also your <br /> perfect house sitter</h1>
                <h4>Meet the nation's largest network of pet sitters</h4>
                <div><span onClick={this.onClick} className={classes.headerButton}>Book House Sitting</span></div>
            </div>
        </div>
        );
    }
}

const HeaderHouseSitting = compose(
    withRouter,
    connect(null, { setSearchParam })
)(HeaderHouseSittingBase)

export default HeaderHouseSitting