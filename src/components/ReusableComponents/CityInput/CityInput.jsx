import React from 'react';
import classes from './CityInput.module.css';
import  { Select } from 'antd';
import 'antd/lib/select/style/index.css';
import data from '../../constants/data'

// const CityInput=({
//   field: { name, value, onChange, onBlur },
//   form:{setFieldValue},
//   ...props
// }) =>{
// const { Option } = Select;
//     return(
//                       <div >
//                           <label htmlFor="city"> {props.values} near</label>
//                           <Select
//                               showSearch
//                               id={props.id}
//                               className={classes.cityInput}
//                               size="large"
//                               value={value}                              
//                               placeholder="Enter City"
//                               optionFilterProp="children"
//                               onChange={(value)=>{
//                                 setFieldValue('city', value)
//                               }}
//                               filterOption={(input, option) =>
//                                 option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
//                               }
//                             >
//                           {data.cities.map(data=>  <Option value={data.content} key={Math.random()}>{data.content}</Option>)}

//                           </Select>
//                         </div>

//   )
// }



const CityInput=({
  field: { name, value, onChange, onBlur },
  form: { errors, touched, setFieldValue },
  ...props
}) =>{
    return(
                      <div>
                          <label htmlFor="city"> {props.values} near</label>
                            <input
                                className={classes.cityInput + (errors[name] && touched[name] ? ` ${classes["is-invalid"]}` : '')}
                                type={props.type}
                                placeholder="Enter city"
                                id={props.id}
                                name={name}
                                onChange={onChange}
                                value={value}
                                        />
                        </div>

  )
}



export default CityInput;
