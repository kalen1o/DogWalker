import React, {Component} from 'react';
import classes from './MainContent.module.css';
import SearchForm from './SearchForm/SearchForm';
import ServicesForEveryDogAndCat from './ServicesForEveryDogAndCat/ServicesForEveryDogAndCat';
import HowItWorks from './HowItWorks/HowItWorks';



const MainContent =()=>{
  return(
    <div>
      <div className={classes.localLovingPetCare}>
<<<<<<< HEAD
      <h1 className={classes.h1}>Local, Loving Pet Care </h1>
      <h2>Book trusted sitters and dog walkers who'll <br/>treat your pets like family.</h2>
=======
        <h1>Local, Loving Pet Care </h1>
        <h2>Book trusted sitters and dog walkers who'll <br/>treat your pets like family.</h2>
>>>>>>> 2ef88e1dd92ad772402a3e7c1de219b0f9f5c231
        <SearchForm />
      </div>

      < ServicesForEveryDogAndCat />

      <HowItWorks />

    </div>
  )
}


export default MainContent
