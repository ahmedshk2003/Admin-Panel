import React from 'react';
import "./Style.css"

const Select= ({ 
    className='Global-select',
    value, 
    required, 
    // disabled, 
    onChange, 
    ...props
}) => {
 
    return (
         <select
          className={className}
          onChange={onChange}
          value={value}
          required
         ></select>
    )
}

const Option = ({ 
    className="Global-option",
    value, 
    keys,
}) => {


    return (
         <input 
          className={className}
          value={value}
          key={keys}
         > {value} </input>
    )
}

export {Select, Option}