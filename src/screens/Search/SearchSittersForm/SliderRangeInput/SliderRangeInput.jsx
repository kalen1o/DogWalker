import React from 'react';
import { Slider } from 'antd';
import 'antd/lib/slider/style/index.css';
import 'antd/lib/tooltip/style/index.css';
import classes from './SliderRangeInput.module.css'

const SliderRangeInput=({
  field,
  form,
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
// {console.log(marks[10].label.props.children)}
    return(
                      <div>

                            <Slider
                                  range
                                  marks={marks}
                                  min={props.min}
                                  max={props.max}
                                  defaultValue={props.defaultValue}
                                  tipFormatter={(value)=>{
                                  return `$${value}`}}
                                  onAfterChange={(value)=>
                                    form.setFieldValue("salary", value)
                                  }
                          />

                        </div>

  )
}


export default SliderRangeInput;
