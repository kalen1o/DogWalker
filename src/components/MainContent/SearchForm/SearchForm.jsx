import React from 'react';
import { Formik,  Form, Field,  } from "formik";
import { render } from "react-dom";
import Checkbox from './../../ReusableComponents/Checkbox';
import ButtonGroup from './ButtonGroup/ButtonGroup';
import CityInput from './CityInput/CityInput';
import data from './../../constants/data';
import classes from './SearchForm.module.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome,faSuitcaseRolling, faPaw, faDog, faSun,faWalking, faCat,  faSync, faCalculator } from '@fortawesome/free-solid-svg-icons';
import DatePickerOneField from './DatePickerField/DatePickerOneField';
import DatePickerField from './DatePickerField/DatePickerField'



library.add(faHome, faSuitcaseRolling, faPaw, faDog, faSun,faWalking, faCat,faSync, faCalculator )





const SearchForm=()=>(
  <>
  <h1 >Some text</h1>
  <div className={classes.searchFormContainer}>
      <Formik
        initialValues={{
          dogButtons:'Dog Boarding',
          step: "Step1",
          city: "",
          regularity: "One Time",
          startDate: "",
          endDate:  "",
          dogSizes: [],
          daysOfTheWeek: []
        }}
        onSubmit={values => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
              }, 500);
            }}

        validate={values=>{
          let errors={};
          if (errors.name){
            errors.name='Name is required';
          }
          return errors;
        }}
        >
        {({
          values,
          errors,
          handleSubmit,
          handleChange,
          isSubmitting,
          setFieldValue
          }) => (
            <>


          <Form onSubmit={handleSubmit} className={classes.searchFormBox}>
            <div className={classes.petType}><h3>I'm looking for service for my Dog</h3></div>
            <div className={classes.buttonsBox}>
              <div className={classes.firstButtonsBox} >
                  <label htmlFor="dogButtonsAwayGroup">For When You're Away</label>
                  <div id="dogButtonsAwayGroup" className={classes.dogAwayButtonsDiv}>
                      {data.dog.slice(0,3).map(data=>
                                       <Field
                                          component={ButtonGroup}
                                          props={data}
                                          key={Math.random()}
                                          firstNameField="dogButtons"
                                          secondNameField="step"
                                          classNameText='buttonField'
                                        />
                                    )}
                  </div>

              </div>
              <div className={classes.secondButtonsBox}>
                  <label htmlFor="dogButtonsAtWorkGroup">For When You're At Work</label>
                  <div id="dogButtonsAtWorkGroup" className={classes.dogAtWorkButtonsDiv}>
                      {data.dog.slice(3,5).map(data=>
                                                  <Field
                                                        component={ButtonGroup}
                                                        props={data}
                                                        key={Math.random()}
                                                        firstNameField="dogButtons"
                                                        secondNameField="step"
                                                        classNameText='buttonField'
                                                  />
                                              )}
                  </div>
              </div>
            </div>
    <div>
          <Field
                render={() => {
                const step= values.step;
                switch (step){
                case "Step1":
                  return  <div className={classes.cityInputAndDatePicker}>
                  <div className={classes.cityInput}>
                      <Field
                            component={CityInput}
                            type="text"
                            id="city"
                            name="city"
                            values={values.dogButtons}
                      />
                    </div>
                    <div className={classes.datePickerField}>
                    <label>For these days</label>
                    <Field
                          component={DatePickerField}

                          firstField={values.dogButtons==='Dog Boarding'?"Drop off":"Start date"}
                          secondField={values.dogButtons==='Dog Boarding'?"Pick Up":"End date"}
                    />
                    </div>

                </div>
                  case "Step2":
                    return   <div className={classes.cityInputAndRegularity}>
                              <div>
                                  <Field
                                        component={CityInput}
                                        type="text"
                                        id="city"
                                        name="city"
                                        values={values.dogButtons}
                                  />
                              </div>
                    <div >
                        <label htmlFor="oftenNeedService">How often do you need this service? ({values.dogButtons})</label>
                        <div id="oftenNeedService" className={classes.oftenNeedService}>
                        {data.oftenNeedService.map(data=>
                                                      <Field
                                                        component={ButtonGroup}
                                                        props={data}
                                                        key={Math.random()}
                                                        firstNameField="regularity"
                                                        classNameText='regularityButtonField'
                                                      /> )}
                        </div>
                      </div>
                      <div className={classes.secondSwithCase}>
                          <Field
                                render={() => {
                                const step= values.regularity;
                                switch (step){
                                  case 'One Time':
                                      return <div className={classes.datePickerField2}>
                                      <label>For what dates?</label>
                                      <Field
                                            component={DatePickerField}
                                            firstField="Start date"
                                            secondField="End date"
                                      />
                                      </div>
                                  case "Repeat Weekly":
                                      return <div>
                                              <label htmlFor="daysOfTheWeek">For which days?</label>
                                              <div className={classes.daysOfTheWeek} id="daysOfTheWeek">
                                              {data.daysOfTheWeek.map(data=><Checkbox
                                                        name="daysOfTheWeek"
                                                        value={data.value}
                                                        box='daysOfTheWeek'
                                                        key={Math.random()}
                                                  />)}
                                              </div>
                                              <div className={classes.datePickerOneField}>
                                              <label>Start date</label>
                                              <Field
                                                    component={DatePickerOneField}
                                                    firstField="Start date"
                                              />
                                              </div>
                                      </div>
                                }
                              }
                            }/>
                      </div>

                    </div>;
                  }
                }}
              />
          </div>

          <div className={classes.lastField}>
          <div >
          <div>My Dog Size</div>
            <div className={classes.dogSizeAndWeights}>
              {data.weights.map(data=><Checkbox
                        name="dogSizes"
                        value={data.dogSize}
                        box='dogSizes'
                        text={data.weight}
                        key={Math.random()}
                  />)}
            </div>
           </div>

            <button type='submit' className={classes.submitButton}>Search</button>
          </div>
          </Form>
          </>
        )}
      </Formik>
    </div>
  </>
)

export default SearchForm
