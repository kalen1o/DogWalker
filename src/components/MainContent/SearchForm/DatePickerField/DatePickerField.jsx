import React, {Component} from 'react';
import classes from './DatePickerField.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLongArrowAltRight, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


library.add( faCalendarAlt, faLongArrowAltRight )

class DatePickerField extends Component{
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate:  "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChangeStart=(date)=> {
    this.setState({
      startDate: date
    });
  }
  handleChangeEnd=(date)=> {
    this.setState({
      endDate: date
    });
  }

  render(){
    console.log(this.state)
  return(
    <div className={classes.datePickerField}>

      <DatePicker
          className={classes.datePicker}
          selected={this.state.startDate}
          selectsStart
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onChange={this.handleChangeStart}
          placeholderText="Drop off"

      />
    <FontAwesomeIcon className={classes.calcIcon} icon='calendar-alt'/>
    <div className={classes.arrow}>
      <FontAwesomeIcon icon='long-arrow-alt-right'/>
    </div>
  <DatePicker
        className={classes.datePicker}
        selected={this.state.endDate}
        selectsEnd
        startDate={this.state.startDate}
        endDate={this.state.endDate}
        onChange={this.handleChangeEnd}
        placeholderText="Pick up"
  />
  <FontAwesomeIcon className={classes.calcIcon} icon='calendar-alt'/>
    </div>
    )
  }
}


export default DatePickerField
