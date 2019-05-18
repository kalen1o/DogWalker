import React from 'react';
import {  Field } from "formik";
import classes from './ButtonGroup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const ButtonGroup=(props) =>{

    return(
    <Field>
                      {({ field, form }) =>(<div >
                        
                                  <button
                                  className={form.values[props.firstNameField] ===
                                    props.props.text? classes[props.classNameText+'Active']:classes[props.classNameText+'Usual']}
                                  name={props.props.name}
                                  onClick={(e)=>{
                                    form.setFieldValue(props.firstNameField, props.props.text)
                                    form.setFieldValue(props.secondNameField, props.props.name)
                                    form.setFieldValue(form.values.startDate, "")
                                  }}
                                  type='button'
                                  value={props.text}

                                  >
                                  <FontAwesomeIcon className={classes.fontAwesome} icon={props.props.icon} />
                                        <div>  {props.props.text}</div></button>

                      </div>   )  }

    </Field>

  )
}

export default ButtonGroup;
