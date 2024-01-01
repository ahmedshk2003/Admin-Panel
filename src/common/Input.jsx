import React from 'react';
import "./Style.css"

const Input= ({ 
    className="Global-input",
    type, 
    style,
    placeholder, 
    value, 
    id,
    required, 
    disabled, 
    Change, 
    step,
    min,
    ...props
}) => {

    return (
         <input 
    
          className={className}
          onChange={Change}
          type={type}
          placeholder={placeholder}
          value={value}
          step={step}
          min={min}
          id={id}
          required
         />
    )
}


export default Input
