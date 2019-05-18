import React from 'react';
import classes from './CityInput.module.css';



const CityInput=({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  ...props
}) =>{

    return(
                      <div>
                          <label htmlFor="city"> {props.values} near</label>
                            <input
                                className={classes.cityInput}
                                type={props.type}
                                placeholder="Enter city"
                                id={props.id}
                                name={name}
                                onChange={onChange}
                                        />
                        </div>

  )
}



export default CityInput;
