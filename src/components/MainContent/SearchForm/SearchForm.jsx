import React, {Component} from 'react';
import classes from './SearchForm.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faSuitcaseRolling, faPaw, faDog, faSun,faWalking, faCat, faLongArrowAltRight, faSync, faCalculator } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerField from './DatePickerField/DatePickerField';
import data from './../../constants/data'


library.add(faHome,faSuitcaseRolling, faPaw, faDog, faSun,faWalking, faCat,faSync, faCalculator )




class SearchForm extends Component{
  constructor(props) {
    super(props);
    this.state={
      oneTimeDateDisplay: "none",
      repeatWeeklyDisplayDays: "none"
    }
  }
  handleOftenNeedServiceRadio=()=>{
      this.setState({oneTimeDateDisplay: "block"})
  }

  render(){
    console.log(this.state.dateDisplay)

  let dogButtonsDay=data.dog.map(data=> data.timeOfTheDay=="day"?
                            <button key={Math.random()}>
                            <FontAwesomeIcon className={classes.fontAwesome} icon={data.icon} /> <br/>{data.text}</button>
                                    :null  );
  let dogButtonsNight=data.dog.map(data=> data.timeOfTheDay=="night"?
                            <button key={Math.random()}><FontAwesomeIcon icon={data.icon} /><br/>{data.text}</button>:null)
  let dogSizeButtons=data.weights.map(data=>data.dogSize?<button key={Math.random()>{data.dogSize}<br/>{data.weight}</button>:null)
  return(
    <form>
          <div className={classes.searchForm}>
            <div className={classes.checkbox}>
            I'm looking for service for my:
              <label> <input type="checkbox"/> Dog</label>
              <label> <input type="checkbox"/> Cat</label>
            </div>

            <div className={classes.categoryButtons}>
              <div className={classes.away}>
               <p>For When You're Away</p>
                {dogButtonsDay}
              </div>
              <div className={classes.dayCare}>
                 <p>For When You're At Work</p>
                  {dogButtonsNight}
              </div>
            </div>

            <div className={classes.searchPanel}>
              <div className={classes.zipCode}>
                <p>Dog Boarding near</p>
                <input type='text' placeholder="Zip Code or Address"/>
              </div>
              <div className={classes.calendar}>
                <p> For these days</p>
                <DatePickerField firstField="Drop Off" secondField='Pick up'/>
              </div>
            </div>

            <div>
                <div className={classes.oftenNeedService}>
                <input type="radio" className={classes.radioRepeat} name="radios" id="first" onChange={this.handleOftenNeedServiceRadio} />
                      <label for="first"><FontAwesomeIcon icon='calculator' className={classes.fontAwesome} />One Time</label>
                <input type="radio"  className={classes.radioRepeat} name="radios" id="second"/>
                        <label for="second"> <FontAwesomeIcon icon='sync' className={classes.fontAwesome}/> Repeat Weekly</label>
                </div>
                <div className={classes.whatDates} style={{display:this.state.oneTimeDateDisplay}}>
                  For what dates?
                  <DatePickerField firstField="Start date" secondField='End date'/>
                </div>

            </div>

            <div className={classes.dogSize}>
                {dogSizeButtons}
            </div>

            <div className={classes.searchButton}>
              <button>Search</button>
            </div>

          </div>
      </form>
    )
  }
}

export default SearchForm
