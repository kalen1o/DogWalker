import React from 'react';
import classes from './SearchForm.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faSuitcaseRolling, faPaw, faDog, faSun,faWalking, faCat, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DatePickerField from './DatePickerField/DatePickerField';
import data from './../../constants/data'


library.add(faHome,faSuitcaseRolling, faPaw, faDog, faSun,faWalking, faCat )




let SearchForm =()=>{

  let dogButtonsDay=data.dog.map(data=> data.timeOfTheDay=="day"?
                            <button key={Math.random()}>
                            <FontAwesomeIcon className={classes.fontAwesome} icon={data.icon} /> <br/>{data.text}</button>
                                    :null  );
  let dogButtonsNight=data.dog.map(data=> data.timeOfTheDay=="night"?
                            <button key={Math.random()}><FontAwesomeIcon icon={data.icon} /><br/>{data.text}</button>:null)
  let dogSizeButtons=data.weights.map(data=>data.dogSize?<button>{data.dogSize}<br/>{data.weight}</button>:null)
  return(
    <form>
          <div className={classes.searchForm}>
            <div className={classes.checkbox}>
              <label><input type="checkbox"/> Dog</label>
              <label><input type="checkbox"/> Cat</label>
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
                <DatePickerField />
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

export default SearchForm
