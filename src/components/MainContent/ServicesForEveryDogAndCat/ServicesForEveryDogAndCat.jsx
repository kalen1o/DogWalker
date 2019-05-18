import React from 'react';
import classes from './ServicesForEveryDogAndCat.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faSuitcaseRolling, faPaw, faDog, faSun,faWalking, faCat, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import data from './../../constants/data'


library.add(faHome,faSuitcaseRolling, faPaw, faDog, faSun,faWalking, faCat )


let ServicesForEveryDogAndCat=()=>{
  let servicesList=data.dog.map(data=> <div className={classes.descriptionRow} key={Math.random()}>
                                            <div className={classes.iconDiv}><FontAwesomeIcon className={classes.iconServices}icon={data.icon}/></div>
                                            <div className={classes.descriptionBlock}><label>{data.text}</label>
                                            <div className={classes.description}>{data.description}</div></div></div>)


  return(
      <div className={classes.servicesForEveryDogAndCat}>
          <div className={classes.header}><h3>Services for every dog and cat</h3></div>
          <div className={classes.descriptionColumn}          >
            {servicesList}
           </div>
      </div>
  )
}

export default ServicesForEveryDogAndCat
