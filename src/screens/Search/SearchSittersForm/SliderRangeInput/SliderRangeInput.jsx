import React from 'react';
import { Slider } from 'antd';
import 'antd/dist/antd.css';
import classes from './SliderRangeInput.module.css'

const SliderRangeInput=({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  ...props
}) =>{
  const marks = {
  10:  {
    label: <strong>$10</strong>,
  },
  100:  {
    label: <strong>$100</strong>,
  },
};
  console.log(value)
    return(
                      <div>
                            <Slider
                                  range
                                  marks={marks}
                                  min={props.min}
                                  max={props.max}
                                  defaultValue={[10, 100]}
                                  tipFormatter={(value)=>{return `${value}$`}}
                                  onAfterChange={(value)=>
                                  console.log('onAfterChange: ', value)}
                          />

                        </div>

  )
}


export default SliderRangeInput;
