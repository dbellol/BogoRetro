import React from 'react'

const CustomeInputs = (props) => {
  const{type,name,placeholder,classname}=props;
  return (
    <div>
    <input 
    type={type} 
    name={name} 
    placeholder={placeholder} 
    className={`form-control ${classname}`}></input>
  </div>
  )
}

export default CustomeInputs