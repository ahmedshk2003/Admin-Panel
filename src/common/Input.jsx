import React from 'react';

const Input= ({
    className = 'Global-input', 
    type, 
    placeholder, 
    value, 
    required, 
    disabled, 
    onChange, 
    ...props
}) => {

    return (
         <input 
          className={className}
          onChange={onChange}
          type={type}
          placeholder={props.placeholder}
          value={value}
          required
         />
    )
}


export {Input}
