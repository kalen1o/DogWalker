import React from 'react';
import classes from './MainContent.module.css';
import SearchForm from './SearchForm/SearchForm';
import ServicesForEveryDogAndCat from './ServicesForEveryDogAndCat/ServicesForEveryDogAndCat';
import HowItWorks from './HowItWorks/HowItWorks';


// import {
//   SafeAreaView,
//   TextInput,
//   Button,
//   ActivityIndicator,
// } from 'react-native';

import { Formik } from 'formik';

const MainContent =()=>{
  return(
    <div>
      <div className={classes.localLovingPetCare}>
        <h1>Local, Loving Pet Care </h1>
        <h2>Book trusted sitters and dog walkers who'll <br/>treat your pets like family.</h2>
        <SearchForm />
      </div>

      // < ServicesForEveryDogAndCat />


      <HowItWorks />

    </div>
  )
}


export default MainContent
